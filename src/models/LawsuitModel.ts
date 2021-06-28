// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Lawsuit } from "@portal-bca/types"

const LawsuitSchema = new Mongoose.Schema(
  {
    lawyer: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Lawyer",
      default: null,
      required: false,
      autopopulate: true,
    },
    client: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Client",
      default: null,
      required: false,
      autopopulate: true,
    },
    type: { type: String, required: false, default: null },
    proc_number: { type: String, index: true, unique: true, required: true },
    active_pole: { type: String, required: false, default: null },
    passive_pole: { type: String, required: false, default: null },
    government_agency: { type: String, required: false, default: null },
    subject: { type: String, required: false, default: null },
    court_class: { type: String, required: false, default: null },
    notice_date: { type: String, required: false, default: null },
    internal_notes: { type: Array, required: false, default: null },
    status: { type: String, required: false, default: null },
  },
  { timestamps: true },
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
LawsuitSchema.plugin(require("mongoose-autopopulate"))

const LawsuitModel = Mongoose.model<Lawsuit & Mongoose.Document>("Lawsuit", LawsuitSchema)

export default LawsuitModel
