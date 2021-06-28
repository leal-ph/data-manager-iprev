import Express from "express"
import UserModel from "../models/UserModel"
import Logger from "../modules/logger"

class LogoutController {
  async logout(req: Express.Request, res: Express.Response) {
    Logger.info(`Logout request for user email: ${req.body.email}`)

    const user = await UserModel.findOne({ email: req.body.email }).select("+password").exec()

    try {
      if (!user) {
        Logger.error(`Logout request failed for user email: ${req.body.email} > e-mail not found`)
        return res
          .status(400)
          .json({ status: "error-no-mail", message: "Endereço de e-mail não encontrado!" })
      } else {
        Logger.info(`Logout request successfully executed for user email: ${req.body.email}`)
        const msg = `Usuário ${req.body.email} deslogado com sucesso.`
        await UserModel.findByIdAndUpdate(
          { _id: user.id },
          { last_token: undefined },
          { new: true, useFindAndModify: false },
        )
        res.send({ status: "success", message: msg })
      }
    } catch (error) {
      Logger.error(`Unexpected Error: ${error}`)
      res.status(500).send(error)
    }
  }
}

export default new LogoutController()
