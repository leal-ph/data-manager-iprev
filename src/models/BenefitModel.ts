// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Benefit } from "@portal-bca/types"

export type IBenefit = Benefit

// Definindo um modelo de Schema
const BenefitSchema = new Mongoose.Schema<Benefit>(
  {
    companyName: { type: String, required: true, unique: true },
    companyCategory: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true },
)

const BenefitModel = Mongoose.model<IBenefit & Mongoose.Document>("Benefit", BenefitSchema)

export default BenefitModel

/* defaultData.profiles.forEach((profileInfo: any) => {
  const profile = {
    title: profileInfo.title,
    text: profileInfo.text,
    neededDocuments: profileInfo.neededDocuments,
  }

  ProfileModel.create(profile)
    .then(() => {
      Logger.info(`Profile ${profileInfo.title} successfully created!`)
    })
    .catch((error) => {
      Logger.warn(error)
    })
})
 */
