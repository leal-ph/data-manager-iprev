import Express from "express"
import ProcessModel from "../models/LawsuitModel"
import Logger from "../modules/logger"

class LawsuitController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Lawsuit >> ${req.body.proc_number} << register on DB...`)
    const Process = new ProcessModel(req.body)

    await Process.save()
      .then((response) => {
        Logger.info(`New Lawsuit >> ${req.body.proc_number} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Lawsuit ${req.body.proc_number} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Lawsuit >> ${req.params.id} << on DB...`)
    await ProcessModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Lawsuit >> ${req.params.id} << successfully updated on DB...`)

        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Lawsuit ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findProcessByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Lawsuit on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await ProcessModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(200).send([])
          }
          return res.status(200).send(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Lawsuit on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Lawsuit on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async updateInternalNote(req: Express.Request, res: Express.Response) {
    let internalNotes: any = []

    try {
      const response = await ProcessModel.findOne({ _id: req.params.id }).exec()

      if (response?.internal_notes) {
        internalNotes = response.internal_notes

        internalNotes.push(req.body.note)

        const responseCall = await ProcessModel.findByIdAndUpdate(
          { _id: req.params.id },
          { internal_notes: internalNotes },
          { new: true, useFindAndModify: false },
        )
        return res.status(200).json(responseCall)
      } else {
        Logger.error("Processo não encontrado.")
        return res.status(404).json({ message: "Processo não encontrado." })
      }
    } catch (error) {
      Logger.error(`Error while updating internal note for Lawsuit on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deleteInternalNote(req: Express.Request, res: Express.Response) {
    let internalNotes: any[] = []
    let removeIndex

    try {
      const response = await ProcessModel.findOne({ _id: req.params.id })

      if (response?.internal_notes) {
        internalNotes = response.internal_notes

        internalNotes.forEach((element) => {
          if (JSON.stringify(element) == JSON.stringify(req.body.note)) {
            removeIndex = internalNotes.indexOf(element)
            internalNotes.splice(removeIndex, 1)
          }
        })

        const responseCall = await ProcessModel.findByIdAndUpdate(
          { _id: req.params.id },
          { internal_notes: internalNotes },
          { new: true, useFindAndModify: false },
        )
        return res.status(200).json(responseCall)
      }

      Logger.error("Processo não encontrado.")
      return res.status(404).json({ message: "Processo não encontrado." })
    } catch (error) {
      Logger.error(`Error while updating internal note for Lawsuit on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deleteProcessbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Lawsuit >> ${req.params.id} << on DB...`)
    await ProcessModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        if (response) {
          Logger.info(`Lawsuit >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Processo removido!" })
        } else {
          Logger.error(`Lawsuit >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Lawsuit >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new LawsuitController()
