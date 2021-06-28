import Express from "express"
import Logger from "../modules/logger"
import Cryptr from "cryptr"
import authConfig from "../config/auth.json"
import Bcrypt from "bcryptjs"
import { renewpasstemplate } from "../config/template"

const router = Express.Router()

router.get("/img/:filename", function (req, res) {
  Logger.info("Received image request")
  res.sendFile(`./src/assets/images/${req.params.filename}`, { root: "./" })
})

router.get("/renewpass", function (req, res) {
  const cryptr = new Cryptr(authConfig.id)
  let decryptedMail: string | undefined = undefined

  try {
    decryptedMail = cryptr.decrypt(req.query.cm as string)
    Logger.info(`Renew password user request received for user ${decryptedMail} ...`)
  } catch (error) {
    Logger.error(`Error while decrypting user ${req.query.cm} > ${error} ...`)
    return res.status(401).json({ error: "Hash de usuário inválido!" })
  }

  if (!Bcrypt.compareSync(decryptedMail, req.query.vt as string)) {
    Logger.error(`Error while confirming user ${decryptedMail} encryption >> hash inválido ...`)
    return res.status(401).json({ erro: "Erro na confirmação do e-mail do usuário." })
  }

  const imageFolder = process.env.IMAGES_FOLDER_URL || "http://localhost:5000/img"
  const siteURL = process.env.SITE_URL || "http://35.247.199.10"

  const logoUrl = imageFolder + "/Logo.png"

  const htmlPage = renewpasstemplate
    .replace("{{clientEmail}}", decryptedMail)
    .replace("{{logo_url}}", logoUrl)
    .replace("{{site_url}}", siteURL)

  return res.status(200).send(htmlPage)
})

export default router
