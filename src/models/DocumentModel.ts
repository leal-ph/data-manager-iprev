// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Document } from "@portal-bca/types"

export type IDocument = Document

// Definindo um modelo de Schema
const DocumentSchema = new Mongoose.Schema(
  {
    type: { type: String, required: true },
    path: { type: String, required: true },
    need_sign: { type: Boolean, required: false, default: false },
    d4sign_id: { type: String, required: false, default: null },
    sign_status: { type: String, required: false, default: null },
    finished_ts: { type: Number, required: false, default: null },
    signers_info: { type: Array, required: false, default: [] },
  },
  { timestamps: true },
)

const DocumentModel = Mongoose.model<IDocument & Mongoose.Document>("Document", DocumentSchema)

export default DocumentModel
