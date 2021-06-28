import Express from "express"
import ProfileController from "../controllers/ProfileController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE PROFILES
router.post("/profiles/createprofile", AuthForwarder, ProfileController.create)
router.post("/profiles/getprofilebyfilter", ProfileController.findProfileByFilter)
router.put("/profiles/updateprofile/:id", AuthForwarder, ProfileController.update)
router.delete("/profiles/deleteprofile/:id", AuthForwarder, ProfileController.deleteProfilebyID)

export default router
