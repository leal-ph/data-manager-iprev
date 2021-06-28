// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import Logger from "../modules/logger"
import { Group } from "@portal-bca/types"

// Definindo um modelo de Schema
const GroupSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true },
)

const defaultGroup = {
  name: "Grupo Padrão",
}

const GroupModel = Mongoose.model<Group & Mongoose.Document>("Group", GroupSchema)

GroupModel.create(defaultGroup)
  .then(() => {
    Logger.info("Default group created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

export default GroupModel
