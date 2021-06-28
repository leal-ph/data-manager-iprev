import Express from "express"
import UserController from "../controllers/UserController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE ADMS
router.post("/user/create", UserController.create)
router.post("/user/renewpass", UserController.resetUserPasswordForgot)
router.post("/user/renewpasscode", UserController.resetUserPasswordCodeForgot)

router.put("/user/renewuserpassword/:id", AuthForwarder, UserController.renewUserPassword)
router.put("/user/resetuserpassword/:id", AuthForwarder, UserController.resetUserPassword)
router.delete("/user/delete/:id", AuthForwarder, UserController.delete)

export default router
