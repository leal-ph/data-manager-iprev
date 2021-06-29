import Express from "express"
import BenefitController from "../controllers/BenefitController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE PROFILES
router.post("/benefit/create", BenefitController.create)
router.post("/benefit/filter", BenefitController.filter)
router.put("/benefit/update/:id", AuthForwarder, BenefitController.update)
router.delete("/benefit/delete/:id", AuthForwarder, BenefitController.delete)

export default router
