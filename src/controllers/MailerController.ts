import Express from "express"
import Cryptr from "cryptr"
import ClientModel from "../models/ClientModel"
import UserModel from "../models/UserModel"
import Bcrypt from "bcryptjs"
import mailer from "../modules/mailer"
import mailconfig from "../config/mail.json"
import authConfig from "../config/auth.json"
import Logger from "../modules/logger"
import * as handlebars from "handlebars"
import randomize from "randomatic"
// import * as fs from "fs"
// import * as path from "path"
import {
  mailtemplate,
  notificationTemplate,
  renewPassMailTemplate,
  linkProcessTemplate,
  renewPassMailCodeTemplate,
} from "../config/template"
import moment from "moment"
import "moment/locale/pt-br"

moment.locale("pt-BR")

class MailController {
  async sendVerificationMail(req: Express.Request, res: Express.Response) {
    Logger.info(`Sending verification email to ${req.body.email}`)

    const verifytoken = Bcrypt.hashSync(req.body.email, 8)
    const cryptr = new Cryptr(authConfig.id)
    const encryptedMail = cryptr.encrypt(req.body.email)

    const endpoint =
      process.env.VERIFICATION_ENDPOINT || "http://localhost:3000/api/users/verifyuser"
    const userVerifyUrl = endpoint + "?cm=" + encryptedMail + "&vt=" + verifytoken

    const now = new Date()
    const timestamp = Math.round(now.getTime() / 1000)

    const template = handlebars.compile(mailtemplate)
    const replacements = {
      action_url: userVerifyUrl,
    }

    const htmlToSend = template(replacements)

    try {
      await mailer.sendMail({
        to: req.body.email,
        from: '"Bocayuva Advogados" <push@bocayuvaadvogados.com.br>',
        subject: "E-mail de verificação - Portal Bocayuva Advogados",
        text: "E-mail de verificação",
        html: htmlToSend,
      })
    } catch (error) {
      Logger.error(`Error while sending verification email to ${req.body.email} >> ${error}`)
      return res.status(500).json({ error: "Erro no envio do e-mail de confirmação" })
    }

    Logger.info(`Updating verification timestamp for email ${req.body.email} on database`)
    await ClientModel.findOneAndUpdate(
      { email: req.body.email },
      { $set: { verification_timestamp: timestamp } },
      { new: true, useFindAndModify: false },
    ).catch((error: any) => {
      Logger.error(
        `Error while updating verification timestamp for email ${req.body.email} >> ${error}`,
      )
      return res.status(500).json(error)
    })
  }

  async sendNotificationMail(req: Express.Request, res: Express.Response) {
    Logger.info(`Sending notification email to ${req.body.email}`)

    let template
    let replacements
    let subject: string

    if (req.body.isLinkNotification) {
      template = handlebars.compile(linkProcessTemplate)
      replacements = {
        clientName: req.body.clientName.split(" ")[0],
        lawyerName: req.body.lawyerName,
        lawsuitCode: req.body.lawsuitCode,
        date: moment().utcOffset("-0300").format("LLL"),
      }
      subject = `Nova associação de processo - ${req.body.lawsuitCode}`
    } else {
      template = handlebars.compile(notificationTemplate)
      replacements = {
        clientName: req.body.clientName.split(" ")[0],
        lawyerName: req.body.lawyerName,
        lawsuitCode: req.body.lawsuitCode,
        content: req.body.content,
        date: moment().utcOffset("-0300").format("LLL"),
      }
      subject = `Novo andamento processual interno - ${req.body.lawsuitCode}`
    }

    const htmlToSend = template(replacements)
    try {
      await mailer.sendMail(
        {
          to: req.body.email,
          from: '"Bocayuva Advogados" <push@bocayuvaadvogados.com.br>',
          subject: subject,
          text: "Novo andamento interno",
          html: htmlToSend,
        },
        (err: any) => {
          if (err) {
            Logger.error(`Error while sending notification email to ${req.body.email} >> ${err}`)
            return res.status(500).json({ error: "Erro no envio do e-mail de notificação" })
          }
        },
      )
      return res.status(200).json({ status: "Success!" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  async sendPassRenew(req: Express.Request, res: Express.Response) {
    Logger.info(`Sending password renewing email to ${req.body.email}`)

    // let updatedUser
    const verifytoken = Bcrypt.hashSync(req.body.email, 8)
    const cryptr = new Cryptr(authConfig.id)
    const encryptedMail = cryptr.encrypt(req.body.email)

    const endpoint = process.env.CHANGEPASS_ENDPOINT || mailconfig.renewpassword_endpoint
    const userVerifyUrl = endpoint + "?cm=" + encryptedMail + "/&vt=" + verifytoken

    const template = handlebars.compile(renewPassMailTemplate)
    const replacements = {
      action_url: userVerifyUrl,
    }

    let updatedUser: any

    const htmlToSend = template(replacements)

    const userExists = await UserModel.findOne({ email: req.body.email })

    if (userExists) {
      try {
        await mailer.sendMail(
          {
            to: req.body.email,
            from: '"Bocayuva Advogados" <push@bocayuvaadvogados.com.br>',
            subject: "Troca de Senha - Portal Bocayuva Advogados",
            text: "E-mail de troca de senha",
            html: htmlToSend,
          },
          (err: any) => {
            if (err) {
              Logger.error(`Error while sending verification email to ${req.body.email} >> ${err}`)
              return res.status(500).json({ error: "Erro no envio do e-mail de confirmação" })
            }
          },
        )
        /* return res
          .status(200)
          .json({ status: "E-mail de renovação de password enviado com sucesso!" }) */
      } catch (err) {
        Logger.error(`Error while sending verification email to ${req.body.email} >> ${err}`)
        return res.status(500).json({ error: "Erro no envio do e-mail de confirmação" })
      }

      Logger.info(`Password change email sucessfully sent to >> ${req.body.email}`)
      Logger.info(`Updating renew password timestamp for email ${req.body.email} on database`)

      try {
        updatedUser = await UserModel.findOneAndUpdate(
          { email: req.body.email },
          { $set: { renew_permission: true } },
          { new: true, useFindAndModify: false },
        )
      } catch (error) {
        Logger.error(
          `Error while updating renew password timestamp for email ${req.body.email} >> ${error}`,
        )
        return res.status(500).json(error)
      }

      if (updatedUser) {
        Logger.info(
          `Password renew set for email ${req.body.email} updated successfully on database`,
        )
        return res.status(200).json({ status: "E-mail de troca de senha enviado com sucesso!" })
      } else {
        Logger.error(
          `Error while setting renew password permission for email ${req.body.email} >> User not found on database!`,
        )
        return res.status(404).json({ error: "User not found on database!" })
      }
    } else {
      Logger.error(
        `Error while updating renew password timestamp for email ${req.body.email} >> User not found on database!`,
      )
      return res.status(404).json({ error: "User not found on database!" })
    }
  }

  async sendPassRenewCode(req: Express.Request, res: Express.Response) {
    Logger.info(`Sending password renewing code email to ${req.body.email}`)

    const code = randomize("A0", 6).toString()

    // let updatedUser
    // const verifytoken = Bcrypt.hashSync(req.body.email, 8)
    const cryptr = new Cryptr(authConfig.id)
    const encryptedCode = cryptr.encrypt(code)

    // const endpoint = process.env.CHANGEPASS_ENDPOINT || mailconfig.renewpassword_endpoint
    // const userVerifyUrl = endpoint + "?cm=" + encryptedMail + "/&vt=" + verifytoken

    const template = handlebars.compile(renewPassMailCodeTemplate)
    const replacements = {
      renew_code: code,
    }

    let updatedUser: any

    const htmlToSend = template(replacements)

    const userExists = await UserModel.findOne({ email: req.body.email })

    if (userExists) {
      try {
        await mailer.sendMail(
          {
            to: req.body.email,
            from: '"Bocayuva Advogados" <push@bocayuvaadvogados.com.br>',
            subject: "Troca de Senha - Portal Bocayuva Advogados",
            text: "E-mail de troca de senha",
            html: htmlToSend,
          },
          (err: any) => {
            if (err) {
              Logger.error(`Error while sending verification email to ${req.body.email} >> ${err}`)
              return res.status(500).json({ error: "Erro no envio do e-mail de confirmação" })
            }
          },
        )
        /* return res
          .status(200)
          .json({ status: "E-mail de renovação de password enviado com sucesso!" }) */
      } catch (err) {
        Logger.error(`Error while sending verification email to ${req.body.email} >> ${err}`)
        return res.status(500).json({ error: "Erro no envio do e-mail de confirmação" })
      }

      Logger.info(`Password change email sucessfully sent to >> ${req.body.email}`)
      Logger.info(`Updating renew password timestamp for email ${req.body.email} on database`)

      try {
        const now = new Date()

        updatedUser = await UserModel.findOneAndUpdate(
          { email: req.body.email },
          {
            $set: {
              renew_permission: true,
              renewCryptedCode: encryptedCode,
              renew_permission_timestamp: Math.round(now.getTime() / 1000),
            },
          },
          { new: true, useFindAndModify: false },
        )
      } catch (error) {
        Logger.error(
          `Error while updating renew password timestamp for email ${req.body.email} >> ${error}`,
        )
        return res.status(500).json(error)
      }

      if (updatedUser) {
        Logger.info(
          `Password renew set for email ${req.body.email} updated successfully on database`,
        )
        return res.status(200).json({ status: "E-mail de troca de senha enviado com sucesso!" })
      } else {
        Logger.error(
          `Error while setting renew password permission for email ${req.body.email} >> User not found on database!`,
        )
        return res.status(404).json({ error: "User not found on database!" })
      }
    } else {
      Logger.error(
        `Error while updating renew password timestamp for email ${req.body.email} >> User not found on database!`,
      )
      return res.status(404).json({ error: "User not found on database!" })
    }
  }
}

export default new MailController()
