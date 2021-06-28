import Express from "express"
import LoginController from "../controllers/LoginController"
import LogoutController from "../controllers/LogoutController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE LOGIN/LOGOUT
router.post("/login", AuthForwarder, LoginController.login)
router.post("/logout", AuthForwarder, LogoutController.logout)

export default router
