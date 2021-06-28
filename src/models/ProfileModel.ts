// Realiza a importação do módulo mongoose já iniciado no arquivo config/database.js
import Mongoose from "../config/Database"
import { Profile } from "@portal-bca/types"

// Definindo um modelo de Schema
const ProfileSchema = new Mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    neededDocuments: [{ type: String, required: false }],
    imagepath: { type: String, required: false, default: null },
    initialPriceCents: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
)

const ProfileModel = Mongoose.model<Profile & Mongoose.Document>("Profile", ProfileSchema)

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
export default ProfileModel
