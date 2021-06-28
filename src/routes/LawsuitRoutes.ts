import Express from "express"
import LawsuitController from "../controllers/LawsuitController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE DOCUMENTOS
router.post("/processes/createprocess", AuthForwarder, LawsuitController.create)
router.post("/processes/getprocessbyfilter", AuthForwarder, LawsuitController.findProcessByFilter)
router.put("/processes/updateprocess/:id", AuthForwarder, LawsuitController.update)
router.put("/processes/updateInternalNote/:id", AuthForwarder, LawsuitController.updateInternalNote)
router.put("/processes/deleteInternalNote/:id", AuthForwarder, LawsuitController.deleteInternalNote)
router.delete("/processes/deleteprocess/:id", AuthForwarder, LawsuitController.deleteProcessbyID)

export default router
