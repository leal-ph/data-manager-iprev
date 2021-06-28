import Express from "express"
import Bcrypt from "bcryptjs"
import UserModel from "../models/UserModel"
import LawyerModel from "../models/LawyerModel"
import { User } from "@portal-bca/types"
import Logger from "../modules/logger"
import moment from "moment"
import "moment/locale/pt-br"
import Cryptr from "cryptr"
import authConfig from "../config/auth.json"

import { passrenewedtemplate } from "../config/template"

class UserController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new user >> ${req.body.email} << register on DB...`)

    const password = Bcrypt.hashSync(req.body.password, 10)

    const user = {
      ...req.body,
      password,
    } as User

    await UserModel.create(user)
      .then((response) => {
        Logger.info(`New user >> ${req.body.email} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving user ${req.body.email} on DB >> ${error}...`)
        if (error.code === 11000) {
          return res.status(514).json({ error: "duplicate" })
        } else {
          return res.status(500).json(error)
        }
      })
  }

  async renewUserPassword(req: Express.Request, res: Express.Response) {
    const userData = await UserModel.findOne({ _id: req.params.id }).select("+password").exec()

    if (userData) {
      if (await !Bcrypt.compareSync(req.body.oldpassword, userData.password)) {
        Logger.error(`Wrong old password for user ${req.params.id}`)
        return res.status(400).json({ status: "error-pwd", message: "Senha anterior incorreta!" })
      }
    }

    const password = Bcrypt.hashSync(req.body.newpassword, 10)

    await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { password: password } },
      { new: true, useFindAndModify: false },
    )
      .then(() => {
        return res
          .status(200)
          .json({ status: "success", message: "Troca de senha realizada com sucesso!" })
      })
      .catch((error) => {
        console.error(error)
        return res.status(500).json(error)
      })
  }

  async resetUserPassword(req: Express.Request, res: Express.Response) {
    const password = Bcrypt.hashSync(req.body.pass, 10)

    await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { password: password } },
      { new: true, useFindAndModify: false },
    )
      .then(async () => {
        await LawyerModel.findByIdAndUpdate(
          { _id: req.body.lawyerID },
          { $set: { last_reseted_pwd: moment().utcOffset("-0300").format("LLL") } },
          { new: true, useFindAndModify: false },
        )
        return res
          .status(200)
          .json({ status: "success", message: "Troca de senha realizada com sucesso!" })
      })
      .catch((error) => {
        console.error(error)
        return res.status(500).json(error)
      })
  }

  async resetUserPasswordForgot(req: Express.Request, res: Express.Response) {
    const userData = await UserModel.findOne({ email: req.body.email })

    if (req.body.pass !== req.body.passconfirm) {
      return res.status(500).json({ error: "Passwords mismatch!" })
    }
    const password = Bcrypt.hashSync(req.body.pass, 10)

    const imageFolder = process.env.IMAGES_FOLDER_URL || "http://localhost:5000/img"

    const logoUrl = imageFolder + "/Logo.png"

    if (userData) {
      if (!userData.renew_permission) {
        return res.status(500).json({ error: "No permission to reset password!" })
      }

      await UserModel.findByIdAndUpdate(
        { _id: userData._id },
        { $set: { password: password, renew_permission: false } },
        { new: true, useFindAndModify: false },
      )
        .then(() => {
          return res.status(200).send(passrenewedtemplate.replace("{{logo_url}}", logoUrl))
        })
        .catch((error) => {
          console.error(error)
          return res.status(500).json(error)
        })
    } else {
      return res.status(500).json({ error: "User Not Found!" })
    }
  }

  async resetUserPasswordCodeForgot(req: Express.Request, res: Express.Response) {
    const userData = await UserModel.findOne({ email: req.body.email })

    const cryptr = new Cryptr(authConfig.id)

    let decryptedCode: string | undefined = undefined

    try {
      decryptedCode = cryptr.decrypt(userData?.renewCryptedCode as string)
      Logger.info(`Verify user request received for user ${decryptedCode} ...`)
    } catch (error) {
      Logger.error(`Error while decrypting code ${req.body.code} > ${error} ...`)
      return res.status(500).json({ error: "invalid-hash" })
    }

    if (decryptedCode !== req.body.code) {
      return res.status(460).json({ error: "invalid-code" })
    }

    const password = Bcrypt.hashSync(req.body.pass, 10)

    if (userData) {
      if (!userData.renew_permission) {
        return res.status(461).json({ error: "No permission to reset password!" })
      }

      const now = new Date()

      if (
        userData.renew_permission_timestamp &&
        userData.renew_permission_timestamp <= Math.round(now.getTime() / 1000) - 1 * 3600
      ) {
        return res.status(462).json({ error: "Password renewal expired" })
      }

      await UserModel.findByIdAndUpdate(
        { _id: userData._id },
        { $set: { password: password, renew_permission: false } },
        { new: true, useFindAndModify: false },
      )
        .then(() => {
          return res.status(200).send({ error: "Successfully renewed!" })
        })
        .catch((error) => {
          console.error(error)
          return res.status(500).json(error)
        })
    } else {
      return res.status(500).json({ error: "User Not Found!" })
    }
  }

  async delete(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting user >> ${req.params.id} << on DB...`)

    await UserModel.deleteOne({ _id: req.params.id })
      .then((response: any) => {
        if (response) {
          Logger.info(`Admin user >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Administrador removido!" })
        } else {
          Logger.error(
            `Error while deleting admin user >> ${req.params.id} on DB > id not found!...`,
          )
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error: any) => {
        Logger.error(`Error while deleting admin user >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new UserController()
