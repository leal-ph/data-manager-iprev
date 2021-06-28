// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import { User } from "@portal-bca/types"

import Mongoose from "../config/Database"
import Bcrypt from "bcryptjs"
import Logger from "../modules/logger"

// Definindo um modelo de Schema
export const UserSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    cpf: { type: String, required: false, unique: true },
    password: { type: String, required: true, select: false },
    pLawyer: { type: Boolean, required: false, default: false },
    pClient: { type: Boolean, required: false, default: false },
    pAdmin: { type: Boolean, required: false, default: false },
    last_token: { type: String, required: false, default: null },
    renew_permission: { type: Boolean, required: false, default: false },
    renew_permission_timestamp: { type: Number, required: false, default: null },
    renewCryptedCode: { type: String, required: false, default: null },
  },
  { timestamps: true },
)

const defaultUser = {
  name: "ADMIN",
  email: "admin@admin",
  password: Bcrypt.hashSync("bca@2020", 10),
}

const docsUser = {
  name: "DOC ADMIN",
  email: "docadmin@admin",
  password: Bcrypt.hashSync("bca@2020", 10),
}

const meetUser = {
  name: "MEET ADMIN",
  email: "meetadmin@admin",
  password: Bcrypt.hashSync("bca@2020", 10),
}

const paymentUser = {
  name: "PAYMENT ADMIN",
  email: "paymentadmin@admin",
  password: Bcrypt.hashSync("bca@2020", 10),
}

const lawsuitUser = {
  name: "LAWSUIT ADMIN",
  email: "lawsuitadmin@admin",
  password: Bcrypt.hashSync("bca@2020", 10),
}

const UserModel = Mongoose.model<User & Mongoose.Document>("User", UserSchema)

UserModel.create(defaultUser)
  .then(() => {
    Logger.info("General Admin successfully created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

UserModel.create(docsUser)
  .then(() => {
    Logger.info("Document Admin successfully created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

UserModel.create(meetUser)
  .then(() => {
    Logger.info("Meeting Admin successfully created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

UserModel.create(paymentUser)
  .then(() => {
    Logger.info("Payment Admin successfully created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

UserModel.create(lawsuitUser)
  .then(() => {
    Logger.info("Lawsuit Admin successfully created!")
  })
  .catch((error) => {
    Logger.warn(error)
  })

export default UserModel
