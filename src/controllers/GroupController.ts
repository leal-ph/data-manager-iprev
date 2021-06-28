import Express from "express"
import GroupModel from "../models/GroupModel"
import Logger from "../modules/logger"

class GroupController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Group >> ${req.body.name} << register on DB...`)
    const Group = new GroupModel(req.body)

    await Group.save()
      .then((response) => {
        Logger.info(`New Group >> ${req.body.name} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Group ${req.body.name} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Group >> ${req.params.id} << on DB...`)
    await GroupModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Group >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Group ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findGroupByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Group on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await GroupModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Group não encontrado!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Group on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Group on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deleteGroupbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Group >> ${req.params.id} << on DB...`)
    await GroupModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        if (response) {
          Logger.info(`Group >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Perfil removido!" })
        } else {
          Logger.error(`Group >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Group >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new GroupController()
