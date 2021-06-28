import Express from "express"
import LawyerController from "../controllers/LawyerController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE ADVOGADOS
router.post("/lawyers/createlawyer", AuthForwarder, LawyerController.create)
router.post("/lawyers/getlawyerbyfilter", AuthForwarder, LawyerController.findLawyerByFilter)
router.get("/lawyers/getClientsList", AuthForwarder, LawyerController.getClientsList)
router.put("/lawyers/updatelawyer/:id", AuthForwarder, LawyerController.update)
router.delete("/lawyers/deletelawyer/:id", AuthForwarder, LawyerController.deleteLawyerbyID)

export default router
