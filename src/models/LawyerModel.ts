// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Lawyer } from "@portal-bca/types"

// Definindo um modelo de Schema

const LawyerSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: false },
    expertise: { type: String, required: false },
    email: { type: String, required: true, unique: true, lowercase: true },
    clients: [
      { type: Mongoose.Schema.Types.ObjectId, ref: "Client", required: false, autopopulate: true },
    ],
    user: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: false, default: null },
    teamsuserID: { type: String, required: false, default: null },
    birthdate: { type: String, required: false, default: null },
    telephone: { type: String, required: false, default: null },
    teamscalendarID: { type: String, required: false, default: null },
    oab_register: { type: String, required: false },
    super_admin: { type: Boolean, required: false, default: false },
    last_reseted_pwd: { type: String, required: false, default: null },
    group: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: false,
      default: null,
      autopopulate: true,
    },
  },
  { timestamps: true },
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
LawyerSchema.plugin(require("mongoose-autopopulate"))

const LawyerModel = Mongoose.model<Lawyer & Mongoose.Document>("Lawyer", LawyerSchema)

export default LawyerModel
