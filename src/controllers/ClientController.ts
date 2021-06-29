import Express from "express"
import ClientModel from "../models/ClientModel"
import UserModel from "../models/UserModel"
import LawyerModel from "../models/LawyerModel"
import MeetingModel from "../models/MeetingModel"
import MailerController from "./MailerController"
import authConfig from "../config/auth.json"
import Bcrypt from "bcryptjs"
import Cryptr from "cryptr"
import Logger from "../modules/logger"
import { Payment } from "@portal-bca/types"
import { verifiedtemplate } from "../config/template"

class ClientController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new User >> ${req.body.email} << register on DB...`)

    const user = new ClientModel(req.body)

    await user
      .save()
      .then((response) => {
        Logger.info(`New User >> ${req.body.email} << successfully saved on DB...`)
        MailerController.sendVerificationMail(req, res)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving User ${req.body.email} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async createBasic(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new User >> ${req.body.email} << register on DB...`)

    const existsInLawyers = await LawyerModel.findOne({ email: req.body.email })

    if (existsInLawyers) {
      return res.status(513).json({ error: "Usuário já existente como advogado!" })
    }

    const user = new ClientModel(req.body)
    await user
      .save()
      .then((response) => {
        Logger.info(`New Basic User >> ${req.body.email} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch(async (error) => {
        if (error.code == 11000) {
          const registeredUser = await ClientModel.findOne({ email: req.body.email })
          if (registeredUser && !registeredUser?.finished) {
            const newUser = await ClientModel.findByIdAndUpdate(
              { _id: registeredUser._id },
              { birthdate: req.body.birthdate, name: req.body.name, telephone: req.body.telephone },
              { new: true, useFindAndModify: false },
            )
            return res.status(200).json(newUser)
          } else {
            return res.status(512).json(error)
          }
        } else {
          Logger.error(`Error while saving User ${req.body.email} on DB >> ${error}...`)
          return res.status(500).json(error)
        }
      })
  }

  async updateFormAnswer(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating User >> ${req.params.id} << register on DB...`)

    ClientModel.findOne({ _id: req.params.id })
      .then((response: any) => {
        if (response) {
          response.form_answers.push(req.body.form_answers)
          ClientModel.findByIdAndUpdate({ _id: req.params.id }, response, {
            new: true,
            useFindAndModify: false,
          })
            .then((response) => {
              Logger.info(`User updated!`)
              return res.status(200).json(response)
            })
            .catch((error) => {
              Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)
              return res.status(500).json(error)
            })
        } else {
          Logger.error(`Error while updating User ${req.params.id} on DB >> user not found...`)
          return res.status(500).json({ message: "Usuário não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while find User ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async updateProfile(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Profile for User >> ${req.params.id} << register on DB...`)

    if (!req.body.profile) {
      return res.status(400).json({ message: "Profile Id not found on body" })
    }

    ClientModel.findByIdAndUpdate(
      { _id: req.params.id },
      { profile: req.body.profile },
      { new: true, useFindAndModify: false },
    )
      .then((response) => {
        Logger.info(`User updated!`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async updateAdditionalInfo(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating User >> ${req.params.id} << register on DB...`)

    ClientModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`User updated!`)
        MailerController.sendVerificationMail(req, res)
        return res.status(200).json(response)
      })
      .catch((error) => {
        if (error.code == 11000) {
          const keys = Object.keys(error.keyValue)
          if ("cpf" in keys) {
            return res.status(512).json({ error: "duplicate", key: "cpf" })
          }
          if ("rg" in keys) {
            return res.status(513).json({ error: "duplicate", key: "rg" })
          }
        }
        Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)
        if (req.body.password) {
          return res.status(512).json({ error: "duplicate", keys: Object.keys(error.keyValue) })
        }
      })
  }

  async createNewClient(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new client register <<${req.body.email} on DB...`)

    const user = new ClientModel(req.body)

    await user
      .save()
      .then((response) => {
        Logger.info(`User updated!`)
        MailerController.sendVerificationMail(req, res)
        return res.status(200).json(response)
      })
      .catch((error) => {
        if (error.code == 11000) {
          const keys = Object.keys(error.keyValue)
          if ("cpf" in keys) {
            return res.status(512).json({ error: "duplicate", key: "cpf" })
          }
          if ("rg" in keys) {
            return res.status(513).json({ error: "duplicate", key: "rg" })
          }
          if ("email" in keys) {
            return res.status(514).json({ error: "duplicate", key: "email" })
          }
        }
        Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)
        if (req.body.password) {
          return res.status(512).json({ error: "duplicate", keys: Object.keys(error.keyValue) })
        }
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating User >> ${req.params.id} << on DB...`)

    if (req.body.password) {
      let permission = false
      await ClientModel.findOne({ _id: req.params.id })
        .then((response) => {
          if (response && response.renewpassword_permission == true) {
            permission = true
          }
        })
        .catch((error) => {
          return res.status(500).json(error)
        })
      if (permission) {
        const password = Bcrypt.hashSync(req.body.password, 10)
        req.body.password = password
        req.body.renewpassword_permission = false
        await ClientModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
          useFindAndModify: false,
        })
          .then((response) => {
            Logger.info(`User >> ${req.params.id} << successfully updated on DB...`)
            return res.status(200).json(response)
          })
          .catch((error) => {
            Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)
            return res.status(500).json(error)
          })
      } else {
        Logger.error(
          `You don't have permission to update user password for user >> ${req.params.id} << on DB...`,
        )
        return res
          .status(500)
          .json({ Error: "Você não possui permissão para atualizar a senha deste usuário" })
      }
    } else {
      await ClientModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        useFindAndModify: false,
      })
        .then(async (response) => {
          if (response && req.body.email) {
            await UserModel.findByIdAndUpdate(
              { _id: response.user },
              { email: response.email },
              {
                new: true,
                useFindAndModify: false,
              },
            )
          }
          Logger.info(`User >> ${req.params.id} << successfully updated on DB...`)
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while updating User ${req.params.id} on DB >> ${error}...`)

          return res.status(500).json(error)
        })
    }
  }

  async getUserById(req: Express.Request, res: Express.Response) {
    await ClientModel.findOne({ _id: req.query.id })
      .then((response) => {
        return res.status(200).json(response)
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  }

  async updateUserDocs(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating document >> ${req.params.id} << on DB...`)

    ClientModel.findByIdAndUpdate(
      { _id: req.body.userId },
      { $push: { documents: req.body.documentId } },
      {
        new: true,
        useFindAndModify: false,
      },
    )
      .then((response) => {
        Logger.info(`Client >> ${req.body.userId} << documents successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating document ${req.body.documentId} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async checkCPFExists(req: Express.Request, res: Express.Response) {
    try {
      const response = await ClientModel.findOne({ cpf: req.body.cpf })
      if (response) {
        return res.status(200).send({ exists: true })
      } else {
        return res.status(200).send({ exists: false })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async checkRGExists(req: Express.Request, res: Express.Response) {
    try {
      const response = await ClientModel.findOne({ rg: req.body.rg })
      if (response) {
        return res.status(200).send({ exists: true })
      } else {
        return res.status(200).send({ exists: false })
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async getUserPayments(req: Express.Request, res: Express.Response) {
    await ClientModel.find({ _id: req.query.clientId })
      .populate("payments")
      .then((response) => {
        return res.status(200).json(response[0].payments)
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  }

  async getUserPendingPayments(req: Express.Request, res: Express.Response) {
    const pendingPayments: Payment[] = []

    await ClientModel.find({ _id: req.query.clientId })
      .populate("payments")
      .then((response) => {
        response[0].payments.forEach(async (payment) => {
          if (payment.status == "pending") {
            pendingPayments.push(payment)
          }
        })

        return res.status(200).json(pendingPayments)
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  }

  async findUserByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find User on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await ClientModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching User on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching User on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async verifyUser(req: Express.Request, res: Express.Response) {
    const now = new Date()
    const timestamp = Math.round(now.getTime() / 1000)
    const cryptr = new Cryptr(authConfig.id)

    const imageFolder =
      process.env.IMAGES_FOLDER_URL || "http://app.bocayuvaadvogados.com.br/api/img"

    const logoUrl = imageFolder + "/Logo.png"

    let decryptedMail: string | undefined = undefined

    try {
      decryptedMail = cryptr.decrypt(req.query.cm as string)
      Logger.info(`Verify user request received for user ${decryptedMail} ...`)
    } catch (error) {
      Logger.error(`Error while decrypting user ${req.query.cm} > ${error} ...`)
      return res.status(401).json({ error: "Hash de usuário inválido!" })
    }

    const user = await ClientModel.findOne({ email: decryptedMail })

    if (!user) {
      Logger.error(`Error while finding user ${decryptedMail} on database >>`)
      return res.status(500).json({ error: "E-mail não encontrado na base de dados!" })
    }

    if (await !Bcrypt.compareSync(decryptedMail, req.query.vt as string)) {
      Logger.error(`Error while confirming user ${decryptedMail} encryption >> hash inválido ...`)
      return res.status(401).json({ erro: "Erro na confirmação do e-mail do usuário." })
    }

    if (user.verification_timestamp && timestamp - user.verification_timestamp > 24 * 3600) {
      Logger.error(`Error while validating user ${decryptedMail} token >> expired token! ...`)
      return res
        .status(401)
        .json({ erro: "Token de validação expirado! Envie uma nova requisição de verificação!" })
    }

    await ClientModel.findOneAndUpdate(
      { email: decryptedMail },
      { $set: { email_confirmed: true } },
      { new: true, useFindAndModify: false },
    )
      .then(() => {
        Logger.info(`Verify user request successfully executed for user ${decryptedMail} ...`)

        return res.status(200).send(verifiedtemplate.replace("{{logo_url}}", logoUrl))
        // .json({ status: "success", message: "Usuário confirmado com sucesso!" })
      })
      .catch((error) => {
        Logger.error(`Error while validating user ${decryptedMail} >> ${error} ...`)
        return res.status(500).json(error)
      })
  }

  async allowRenewPassword(req: Express.Request, res: Express.Response) {
    const now = new Date()
    const timestamp = Math.round(now.getTime() / 1000)
    const cryptr = new Cryptr(authConfig.id)
    let decryptedMail: string | undefined = undefined

    try {
      decryptedMail = cryptr.decrypt(req.query.cm as string)
      Logger.info(`Renew password user request received for user ${decryptedMail} ...`)
    } catch (error) {
      Logger.error(`Error while decrypting user ${req.query.cm} > ${error} ...`)
      return res.status(401).json({ error: "Hash de usuário inválido!" })
    }

    const user = await ClientModel.findOne({ email: decryptedMail })

    if (!user) {
      Logger.error(`Error while finding user ${decryptedMail} on database >>`)
      return res.status(500).json({ error: "E-mail não encontrado na base de dados!" })
    }

    if (await !Bcrypt.compareSync(decryptedMail, req.query.vt as string)) {
      Logger.error(`Error while confirming user ${decryptedMail} encryption >> hash inválido ...`)
      return res.status(401).json({ erro: "Erro na confirmação do e-mail do usuário." })
    }

    if (user.renewpassword_timestamp && timestamp - user.renewpassword_timestamp > 2 * 3600) {
      Logger.error(`Error while validating user ${decryptedMail} token >> expired token! ...`)
      return res
        .status(401)
        .json({ erro: "Token de validação expirado! Envie uma nova requisição de verificação!" })
    }

    ClientModel.findOneAndUpdate(
      { email: decryptedMail },
      { $set: { renewpassword_permission: true } },
      { new: true, useFindAndModify: false },
    )
      .then(() => {
        Logger.info(
          `Renew user password request successfully executed for user ${decryptedMail} ...`,
        )
        return res.status(200).json({
          status: "success",
          message: "Permissão de troca de senha concedida com sucesso!",
        })
      })
      .catch((error) => {
        Logger.error(
          `Error while allowing password renew for user ${decryptedMail} >> ${error} ...`,
        )
        return res.status(500).json(error)
      })
  }

  async renewUserPassword(req: Express.Request, res: Express.Response) {
    const password = Bcrypt.hashSync(req.body.password, 10)

    await ClientModel.findOneAndUpdate(
      { email: req.body.email },
      { $set: { password: password, renewpassword_permission: false } },
      { new: true, useFindAndModify: false },
    )
      .then(() => {
        return res
          .status(200)
          .json({ status: "success", message: "Troca de senha realizada com sucesso!" })
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  }

  async deleteUserbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting User >> ${req.params.id} << on DB...`)

    await ClientModel.findOneAndDelete({ _id: req.params.id })
      .then(async (response) => {
        if (response) {
          await UserModel.findOneAndDelete({ _id: response.user })
          await MeetingModel.deleteMany({ client: response._id })
          Logger.info(`User >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Usuário e reuniões associadas removidas!" })
        } else {
          Logger.error(`User >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting User >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new ClientController()
