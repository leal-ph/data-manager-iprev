import Express from "express"
import ClientController from "../controllers/ClientController"
import MailerController from "../controllers/MailerController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE USUÁRIO
router.post("/users/createuser", ClientController.create)
router.post("/users/createnewclient", AuthForwarder, ClientController.createNewClient)
router.post("/users/createbasic", ClientController.createBasic)
router.post("/users/updateform/:id", ClientController.updateFormAnswer)
router.post("/users/updateadditional/:id", ClientController.updateAdditionalInfo)
router.post("/users/updateprofile/:id", ClientController.updateProfile)
router.post("/users/updateUserDocs", ClientController.updateUserDocs)
router.post("/users/sendrenewrequest", MailerController.sendPassRenewCode)
router.post("/users/checkRG", ClientController.checkRGExists)
router.post("/users/checkCPF", ClientController.checkCPFExists)
router.get("/users/verifyuser", ClientController.verifyUser)
router.get("/users/allowrenewpassword", ClientController.allowRenewPassword)
router.post("/users/getuserbyfilter", AuthForwarder, ClientController.findUserByFilter)
router.put("/users/updateuser/:id", AuthForwarder, ClientController.update)
router.get("/users/getUserPayments", AuthForwarder, ClientController.getUserPayments)
router.get("/users/getUserPendingPayments", AuthForwarder, ClientController.getUserPendingPayments)
router.get("/users/getUserDocPendings", AuthForwarder, ClientController.getUserDocPendings)
router.get("/users/getUserDocuments", AuthForwarder, ClientController.getUserDocuments)
router.get("/users/getUserSignedDocuments", AuthForwarder, ClientController.getUserSignedDocuments)
router.get("/users/getUserById", AuthForwarder, ClientController.getUserById)
router.delete("/users/deleteuser/:id", AuthForwarder, ClientController.deleteUserbyID)

export default router
