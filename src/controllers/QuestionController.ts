import Express from "express"
import QuestionModel from "../models/QuestionModel"
import Logger from "../modules/logger"

class QuestionController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Question >> "${req.body.question}" << register on DB...`)
    const Question = new QuestionModel(req.body)

    await Question.save()
      .then((response) => {
        Logger.info(`New Question >> "${req.body.question}" << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Question "${req.body.question}" on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Question >> ${req.params.id} << on DB...`)
    await QuestionModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Question >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Question ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findQuestionByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Question on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await QuestionModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Questão(ões) não encontrada(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Question on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Question on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deleteQuestionbyID(req: Express.Request, res: Express.Response) {
    await QuestionModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        Logger.info(`Question >> ${req.params.id} << successfully removed from DB...`)
        if (response) {
          Logger.info(`Deleting Question >> ${req.params.id} << on DB...`)
          return res.status(200).json({ success: "Reunião removida!" })
        } else {
          Logger.error(`Question >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Question >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new QuestionController()
