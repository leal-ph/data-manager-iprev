// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Client } from "@portal-bca/types"

export type IClient = Client

const ClientSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: false },
    fullname: { type: String, required: false },
    cpf: { type: String, required: false, unique: true, sparse: true },
    rg: { type: String, required: false, unique: true, sparse: true },
    birthdate: { type: String, required: false, default: null },
    address: { type: String, required: false, default: null },
    zipcode: { type: String, required: false, default: null },
    city: { type: String, required: false, default: null },
    state: { type: String, required: false, default: null },
    telephone: { type: String, required: false, default: null },
    email: { type: String, required: true, unique: true, lowercase: true, sparse: true },
    form_answers: { type: Array, required: false, default: null },
    email_confirmed: { type: Boolean, default: false },
    payments: [
      { type: Mongoose.Schema.Types.ObjectId, ref: "Payment", required: false, autopopulate: true },
    ],
    required_benefits: [
      {
        benefit: {
          type: Mongoose.Schema.Types.ObjectId,
          ref: "Benefit",
          autopopulate: true,
        },
        date: {
          type: Date,
        },
        status: {
          type: String,
        },
      },
    ],
    internal_notes: { type: Object, default: {} },
    verification_timestamp: { type: Number, required: false, default: null },
    renewpassword_timestamp: { type: Number, required: false, default: null },
    renewpassword_permission: { type: Boolean, required: false, default: false },
    user: { type: Mongoose.Schema.Types.ObjectId, ref: "User", required: false, default: null },
    finished: { type: Boolean, required: false, default: false },
    profession: { type: String, required: false },
    marital_status: { type: String, required: false },
    rg_consignor: { type: String, required: false },
  },
  { timestamps: true },
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
ClientSchema.plugin(require("mongoose-autopopulate"))

const ClientModel = Mongoose.model<IClient & Mongoose.Document>("Client", ClientSchema)

export default ClientModel
