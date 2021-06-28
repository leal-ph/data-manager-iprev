import Express from "express"
import MailerController from "../controllers/MailerController"
// import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE FORMULÁRIOS
router.post("/mail/sendnotification", MailerController.sendNotificationMail)

export default router
