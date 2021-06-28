// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Form } from "@portal-bca/types"

// Definindo um modelo de Schema
const FormSchema = new Mongoose.Schema(
  {
    profile: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      autopopulate: true,
    },
    questions: [
      { type: Mongoose.Schema.Types.ObjectId, ref: "Question", required: true, autopopulate: true },
    ],
  },
  { timestamps: true },
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
FormSchema.plugin(require("mongoose-autopopulate"))

const FormModel = Mongoose.model<Form & Mongoose.Document>("Form", FormSchema)

export default FormModel
