import Express from "express"
import QuestionController from "../controllers/QuestionController"
import AuthForwarder from "../middlewares/AuthForwarder"

const router = Express.Router()

// ROTAS DE QUESTÕES
router.post("/questions/createquestion", AuthForwarder, QuestionController.create)
router.post(
  "/questions/getquestionbyfilter",
  AuthForwarder,
  QuestionController.findQuestionByFilter,
)
router.put("/questions/updatequestion/:id", AuthForwarder, QuestionController.update)
router.delete("/questions/deletequestion/:id", AuthForwarder, QuestionController.deleteQuestionbyID)

export default router
