import Express from "express"
import FormModel from "../models/FormModel"
import Logger from "../modules/logger"

class FormController {
  async create(req: Express.Request, res: Express.Response) {
    const Form = new FormModel(req.body)
    Logger.info(`Creating new Form >> ${req.body.type} << register on DB...`)

    await Form.save()
      .then((response) => {
        Logger.info(`New Form >> ${req.body.type} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Form ${req.body.type} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Form >> ${req.params.id} << on DB...`)
    await FormModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Form >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Form ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findFormByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Form on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await FormModel.find(filter)
        .populate("questions", "question questionID options")
        .then((response) => {
          if (response.length < 1) {
            Logger.warn(`No forms founded on DB for filter >> ${filter}...`)
            return res.status(404).json({ message: "Formulário(s) não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Form on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async deleteFormbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Form >> ${req.params.id} << on DB...`)

    FormModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        if (response) {
          Logger.info(`Form >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Formulário removido!" })
        } else {
          Logger.error(`Form >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Form >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new FormController()
