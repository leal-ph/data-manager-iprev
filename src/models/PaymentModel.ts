// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Payment } from "@portal-bca/types"

const PaymentSchema = new Mongoose.Schema(
  {
    type: { type: String, required: false, default: null },
    message: { type: String, required: false, default: null },
    item: { type: Object, required: false, default: null },
    months: { type: Number, required: false, default: 1 },
    charge_identification: { type: String, required: false, default: null },
    max_parcels: { type: Number, required: false, default: null },
    doc_errors: { type: Object, required: false, default: null },
    success: { type: Boolean, required: false, default: null },
    url: { type: String, required: false, default: null },
    pdf: { type: String, required: false, default: null },
    identification: { type: String, required: false, default: null },
    invoice_id: { type: String, required: false, default: null },
    LR: { type: String, required: false, default: null },
    expiry_date: { type: Date, required: false, default: null },
    status: { type: String, required: false, default: null },
  },
  { timestamps: true },
)

const PaymentModel = Mongoose.model<Payment & Mongoose.Document>("Payment", PaymentSchema)

export default PaymentModel
