// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Question } from "@portal-bca/types"

// Definindo um modelo de Schema

const QuestionSchema = new Mongoose.Schema(
  {
    questionOrder: { type: Number, required: true },
    question: { type: String, required: true },
    options: { type: Array, required: true },
  },
  { timestamps: true },
)

const QuestionModel = Mongoose.model<Question & Mongoose.Document>("Question", QuestionSchema)

export default QuestionModel
