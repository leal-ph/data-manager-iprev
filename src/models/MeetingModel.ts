// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Meeting } from "@portal-bca/types"
import moment from "moment"
moment.locale("pt-br")

// Definindo um modelo de Schema
const MeetingSchema = new Mongoose.Schema(
  {
    lawyer: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Lawyer",
      default: null,
      required: true,
      autopopulate: true,
    },
    client: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Client",
      default: null,
      required: true,
      autopopulate: true,
    },
    date: { type: Date, required: true },
    date_ts: { type: Number, required: false },
    date_formatted: { type: String, required: false },
    link: { type: String, required: false, default: null },
    slot: { type: Number, required: false, default: 0 },
    id_teams: { type: String, required: false, default: null },
    informations: { type: Object, required: false, select: false },
  },
  { timestamps: true },
)

// eslint-disable-next-line @typescript-eslint/no-var-requires
MeetingSchema.plugin(require("mongoose-autopopulate"))

MeetingSchema.pre<Meeting & Mongoose.Document>("save", function (next) {
  this.date_ts = new Date(this.date).getTime() / 1000 // eslint-disable-line no-invalid-this
  next()
})

const MeetingModel = Mongoose.model<Meeting & Mongoose.Document>("Meeting", MeetingSchema)

export default MeetingModel
