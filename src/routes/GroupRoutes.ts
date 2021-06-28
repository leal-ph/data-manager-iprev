import Express from "express"
import GroupController from "../controllers/GroupController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE GroupS
router.post("/groups/creategroup", AuthForwarder, GroupController.create)
router.post("/groups/getgroupbyfilter", AuthForwarder, GroupController.findGroupByFilter)
router.put("/groups/updategroup/:id", AuthForwarder, GroupController.update)
router.delete("/groups/deletegroup/:id", AuthForwarder, GroupController.deleteGroupbyID)

export default router
