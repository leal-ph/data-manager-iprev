import axios from "axios"
import Express from "express"
import UserModel from "../models/UserModel"
import Logger from "../modules/logger"

const AUTHSERVICE = process.env.AUTHSERVICE || "http://localhost:3001/validaterequest"

interface reqDoc {
  token?: string
  path: string
}

const AuthForwarder = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const authHeader = req.headers.authorization

  let reqDoc: reqDoc = {
    path: req.path,
  }

  if (!req.path.includes("/login")) {
    if (!authHeader) {
      Logger.error(`Authorization header not provided!`)
      return res.status(401).json({ status: "no-auth-header", message: "Token inexistente!" })
    }

    const parts = authHeader.split(" ")

    if (parts[0] != "Bearer") {
      Logger.error(`Authorization header malformatted! (not Bearer <<token>>)`)
      return res.status(401).json({
        status: "malformatted-token",
        message: 'Token mal formatado. Siga o modelo "Bearer <token>" para autenticar com sucesso.',
      })
    }

    const token = parts[1]

    try {
      const user = await UserModel.findOne({ last_token: token }).exec()

      if (!user) {
        Logger.error(`Expired token provided! Please do the login again!`)
        return res.status(401).json({
          status: "invalid-token",
          message: "Token Inválido ou Expirado. Gere um novo token para o usuário.",
        })
      }
    } catch (error) {
      Logger.error(`Error while searching for token on database > ${error}`)
      return res.status(401).json({
        status: "token-db-error",
        message: "Erro de ao verificar a validade do token no banco de dados!",
      })
    }

    reqDoc = {
      token: token,
      path: req.path,
    }
  }

  axios.post(AUTHSERVICE, reqDoc).then(
    (response) => {
      if (response.status === 200) {
        // Logger.info(`Authorization completed for route ${req.path}`);
        next()
      }
    },
    (error) => {
      console.error(error)
      Logger.error(`Error while sending token for auth-service authentication > ${error}`)
      return res.status(401).json(error)
    },
  )
}

export default AuthForwarder
