import Express from "express"
import FormController from "../controllers/FormController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE FORMULÁRIOS
router.post("/forms/createform", AuthForwarder, FormController.create)
router.post("/forms/getformbyfilter", AuthForwarder, FormController.findFormByFilter)
router.put("/forms/updateform/:id", AuthForwarder, FormController.update)
router.delete("/forms/deleteform/:id", AuthForwarder, FormController.deleteFormbyID)

export default router
