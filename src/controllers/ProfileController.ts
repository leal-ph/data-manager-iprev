import Express from "express"
import ProfileModel from "../models/ProfileModel"
import Logger from "../modules/logger"

class ProfileController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Profile >> ${req.body.title} << register on DB...`)
    const Profile = new ProfileModel(req.body)

    Profile.save()
      .then((response) => {
        Logger.info(`New Profile >> ${req.body.title} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Profile ${req.body.title} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Profile >> ${req.params.id} << on DB...`)
    ProfileModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Profile >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Profile ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findProfileByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Profile on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      ProfileModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Profile não encontrado!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Profile on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Profile on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deleteProfilebyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Profile >> ${req.params.id} << on DB...`)
    ProfileModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        if (response) {
          Logger.info(`Profile >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Perfil removido!" })
        } else {
          Logger.error(`Profile >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Profile >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new ProfileController()
