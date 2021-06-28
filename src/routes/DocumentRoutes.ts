import Express from "express"
import DocumentController from "../controllers/DocumentController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE DOCUMENTOS
router.post("/docs/createdoc", AuthForwarder, DocumentController.create)
router.post("/docs/getdocbyfilter", AuthForwarder, DocumentController.findDocumentByFilter)
router.post("/docs/findByNameAndUpdate", AuthForwarder, DocumentController.findByNameAndUpdate)
router.get("/docs/getAllDocs", AuthForwarder, DocumentController.getAllDocs)
router.get("/docs/getSignedDocs", AuthForwarder, DocumentController.getSignedDocs)
router.put("/docs/updatedoc/:id", AuthForwarder, DocumentController.update)
router.delete("/docs/deletedoc/:id/:clientId", AuthForwarder, DocumentController.deleteDocumentbyID)
router.post("/docs/generatePDF", DocumentController.generatePDF)

export default router
