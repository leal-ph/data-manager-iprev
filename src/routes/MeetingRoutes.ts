import Express from "express"
import MeetingController from "../controllers/MeetingController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE REUNIÕES
router.post("/meetings/createmeeting", AuthForwarder, MeetingController.create)
router.post("/meetings/getmeetingbyfilter", AuthForwarder, MeetingController.findMeetingByFilter)
router.post("/meetings/findlawyermeetings", AuthForwarder, MeetingController.findLawyerMeetings)
router.post("/meetings/findusermeetings", AuthForwarder, MeetingController.findUserMeetings)
router.post("/meetings/findDailyMeetings", AuthForwarder, MeetingController.findDailyMeetings)
router.get(
  "/meetings/findDisponibility",
  AuthForwarder,
  MeetingController.calculateWeeklyDisponibility,
)
router.put("/meetings/updatemeeting/:id", AuthForwarder, MeetingController.update)
router.delete("/meetings/deletemeeting/:id", AuthForwarder, MeetingController.deleteMeetingbyID)

export default router
