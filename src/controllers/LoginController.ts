import Express from "express"
import UserModel from "../models/UserModel"
import Bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import authConfig from "../config/auth.json"
import Logger from "../modules/logger"

const secret = process.env.JWTSECRET || authConfig.secret

class LoginController {
  async login(req: Express.Request, res: Express.Response) {
    let userData

    if (req.body.email_cpf) {
      if (req.body.method === "email") {
        Logger.info(`Login request for user email: ${req.body.email_cpf}`)
        userData = await UserModel.findOne({ email: req.body.email_cpf }).select("+password").exec()
      } else if (req.body.method === "cpf") {
        Logger.info(`Login request for user cpf: ${req.body.email_cpf}`)
        userData = await UserModel.findOne({ cpf: req.body.email_cpf }).select("+password").exec()
      } else {
        Logger.info(`Login request for user email: ${req.body.email_cpf}`)
        userData = await UserModel.findOne({ email: req.body.email_cpf }).select("+password").exec()
      }
    } else if (!req.body.email_cpf && req.body.email) {
      Logger.info(`Login request for user email: ${req.body.email}`)
      userData = await UserModel.findOne({ email: req.body.email }).select("+password").exec()
    }

    try {
      if (!userData) {
        Logger.error("User not found on users database. Try Again!")
        return res
          .status(404)
          .json({ status: "error-no-mail", message: "Endereço de e-mail ou CPF não encontrados!" })
      } else if (await !Bcrypt.compareSync(req.body.password, userData.password)) {
        Logger.error(`Wrong password for user ${req.body.email_cpf}`)
        return res.status(401).json({ status: "error-pwd", message: "Senha incorreta!" })
      } else {
        const token = jwt.sign({ id: req.body.email }, secret)
        Logger.info(`Successful Login request for email/cpf: ${req.body.email_cpf}`)
        // const msg = `Usuário ${req.body.email} autenticado com sucesso.`
        const loggedUser = await UserModel.findByIdAndUpdate(
          { _id: userData.id },
          { last_token: token },
          { new: true, useFindAndModify: false },
        )

        res.send(loggedUser)
      }
    } catch (error) {
      Logger.error(`Unexpected Error: ${error}`)
      res.status(500).send(error)
    }
  }
}

export default new LoginController()
