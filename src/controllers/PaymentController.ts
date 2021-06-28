import Express from "express"
import PaymentModel from "../models/PaymentModel"
import ClientModel from "../models/ClientModel"
import Logger from "../modules/logger"
import { Payment, PaymentStatus } from "@portal-bca/types"

class PaymentController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Payment >> ${req.body.identification} << register on DB...`)
    const Payment = new PaymentModel(req.body)

    await Payment.save()
      .then((response) => {
        Logger.info(`New Payment >> ${req.body.identification} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Payment ${req.body.identification} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Payment >> ${req.params.id} << on DB...`)
    await PaymentModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Payment >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Payment ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findPaymentByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Payment on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      await PaymentModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Pagamento(s) não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Payment on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Payment on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async findPlaceholdersByClientId(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.client) {
        Logger.error(`Client not specified for find Payment on DB...`)
        return res.status(400).json({
          message: "Client não especificado no body da requisição!",
        })
      }

      ClientModel.find({ _id: req.body.client })
        .then((response) => {
          if (response.length !== 1) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
          }
          const client = response.pop()
          if (client) {
            const placeholders = client.payments.filter(
              (p) => p.status === PaymentStatus.PLACEHOLDER || p.status === PaymentStatus.PENDING,
            )
            return res.status(200).json(placeholders)
          }
          return res.status(404).json({ message: "Placeholders não encontrados!" })
        })
        .catch((error) => {
          Logger.error(`Error while searching Payment on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Payment on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async deletePaymentbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Payment >> ${req.params.id} << on DB...`)
    await PaymentModel.findOneAndDelete({ _id: req.params.id })
      .then(async (response) => {
        if (response) {
          await ClientModel.updateMany(
            {},
            { $pull: { payments: (req.params.id as unknown) as Payment } },
            { new: true, useFindAndModify: false },
          )

          Logger.info(`Payment >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Pagamento removido!" })
        } else {
          Logger.error(`Payment >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Payment >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new PaymentController()
