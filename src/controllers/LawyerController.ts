import Express from "express"
import LawyerModel from "../models/LawyerModel"
import UserModel from "../models/UserModel"
import Logger from "../modules/logger"
import MeetingModel from "../models/MeetingModel"
import { Client } from "@portal-bca/types"

class LawyerController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Lawyer >> ${req.body.email} << register on DB...`)
    const lawyer = new LawyerModel(req.body)

    await lawyer
      .save()
      .then((response) => {
        Logger.info(`New Lawyer >> ${req.body.email} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Lawyer ${req.body.email} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Lawyer >> ${req.params.id} << on DB...`)

    await LawyerModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then(async (response) => {
        if (response && req.body.email) {
          await UserModel.findByIdAndUpdate(
            { _id: response.user },
            { email: response.email },
            {
              new: true,
              useFindAndModify: false,
            },
          )
        }
        Logger.info(`Lawyer >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Lawyer ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async getClientsList(req: Express.Request, res: Express.Response) {
    const clientlist: Client[] = []

    try {
      if (!req.query.lawyerid) {
        Logger.error(`Lawyer ID not specified on request...`)
        return res.status(400).json({
          message: "ID de advogado não especificado na requisição",
        })
      }

      const filter = { _id: req.query.lawyerid }

      await LawyerModel.findOne(filter)
        .then((response) => {
          if (!response) {
            Logger.error(`Lawyer ID not found on database... >> ${req.query.lawyerID}`)
            return res.status(404).json({ message: "Advogado não encontrado!" })
          }
          if (response.clients) {
            response.clients.forEach(async (client) => {
              clientlist.push(client)
            })
          }
          return res.status(200).json(clientlist)
        })
        .catch((error) => {
          Logger.error(`Error while searching Lawyer on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async findLawyerByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Lawyer on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await LawyerModel.find(filter)
        .select("+password")
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Advogado não encontrado!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Lawyer on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteLawyerbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Lawyer >> ${req.params.id} << on DB...`)

    await LawyerModel.findOneAndDelete({ _id: req.params.id })
      .then(async (response) => {
        if (response) {
          await UserModel.findOneAndDelete({ _id: response.user })
          await MeetingModel.deleteMany({ client: response._id })
          Logger.info(`Lawyer >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Advogado removido!" })
        } else {
          Logger.error(`Lawyer >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Lawyer >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new LawyerController()
