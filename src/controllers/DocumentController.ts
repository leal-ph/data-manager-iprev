import Express from "express"
import DocumentModel from "../models/DocumentModel"
import ClientModel from "../models/ClientModel"
import Logger from "../modules/logger"
import { Document } from "@portal-bca/types"
import {
  contractText,
  procuracao,
  contractTextMaternidade,
  contractTextRevisao,
  aceiteContract,
} from "../config/template"
import { generatePDF } from "../modules/pdfgen2"
import moment from "moment"

class DocumentController {
  async create(req: Express.Request, res: Express.Response) {
    const document = new DocumentModel(req.body)

    Logger.info(
      `Creating new Document >> ${req.body.type} // ${req.body.path} << register on DB...`,
    )

    document
      .save()
      .then((response) => {
        Logger.info(`New document >> ${req.body.path} << successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving document ${req.body.path} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating document >> ${req.params.id} << on DB...`)

    DocumentModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Document >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating document ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findDocumentByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      DocumentModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Documento(s) não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching document on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching document on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async generatePDF(req: Express.Request, res: Express.Response) {
    try {
      await generatePDF(
        contractText
          .replace(/{{siteUrl}}/g, "http://localhost:3000")
          .replace(/{{name}}/g, req.body.name)
          .replace(/{{nacionalidade}}/g, "Brasileiro(a)")
          .replace(/{{estadocivil}}/g, req.body.marital_status)
          .replace(/{{cpf}}/g, req.body.cpf)
          .replace(/{{rg}}/g, req.body.rg)
          .replace(/{{endereco}}/g, req.body.address)
          .replace(/{{cep}}/g, req.body.zipcode)
          .replace(/{{currentDate}}/g, moment().format("LL")),
        "contratoGeral",
      )

      await generatePDF(
        aceiteContract
          .replace(/{{siteUrl}}/g, "http://localhost:3000")
          .replace(/{{name}}/g, req.body.name)
          .replace(/{{nacionalidade}}/g, "Brasileiro(a)")
          .replace(/{{estadocivil}}/g, req.body.marital_status)
          .replace(/{{cpf}}/g, req.body.cpf)
          .replace(/{{rg}}/g, req.body.rg)
          .replace(/{{endereco}}/g, req.body.address)
          .replace(/{{cep}}/g, req.body.zipcode)
          .replace(/{{currentDate}}/g, moment().format("LL")),
        "contratoAceite",
      )

      await generatePDF(
        procuracao
          .replace(/{{siteUrl}}/g, "http://localhost:3000")
          .replace(/{{name}}/g, req.body.name)
          .replace(/{{nacionalidade}}/g, "Brasileiro(a)")
          .replace(/{{estadocivil}}/g, req.body.marital_status)
          .replace(/{{cpf}}/g, req.body.cpf)
          .replace(/{{rg}}/g, req.body.rg)
          .replace(/{{endereco}}/g, req.body.address)
          .replace(/{{cep}}/g, req.body.zipcode)
          .replace(/{{currentDate}}/g, moment().format("LL")),
        "procuracao",
      )

      await generatePDF(
        contractTextMaternidade
          .replace(/{{siteUrl}}/g, "http://localhost:3000")
          .replace(/{{name}}/g, req.body.name)
          .replace(/{{nacionalidade}}/g, "Brasileiro(a)")
          .replace(/{{estadocivil}}/g, req.body.marital_status)
          .replace(/{{cpf}}/g, req.body.cpf)
          .replace(/{{rg}}/g, req.body.rg)
          .replace(/{{endereco}}/g, req.body.address)
          .replace(/{{cep}}/g, req.body.zipcode)
          .replace(/{{currentDate}}/g, moment().format("LL")),
        "contratoMaternidade",
      )

      await generatePDF(
        contractTextRevisao
          .replace(/{{siteUrl}}/g, "http://localhost:3000")
          .replace(/{{name}}/g, req.body.name)
          .replace(/{{nacionalidade}}/g, "Brasileiro(a)")
          .replace(/{{estadocivil}}/g, req.body.marital_status)
          .replace(/{{cpf}}/g, req.body.cpf)
          .replace(/{{rg}}/g, req.body.rg)
          .replace(/{{endereco}}/g, req.body.address)
          .replace(/{{cep}}/g, req.body.zipcode)
          .replace(/{{currentDate}}/g, moment().format("LL")),
        "contratoRevisao",
      )
      return res.status(200).json({ status: "ok" })
    } catch (err) {
      return res.status(500).json(err)
    }
  }

  async deleteDocumentbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting document >> ${req.params.id} << on DB...`)

    DocumentModel.deleteOne({ _id: req.params.id })
      .then(async (response: any) => {
        if (response) {
          await ClientModel.updateMany(
            { _id: req.params.clientId },
            { $pull: { documents: (req.params.id as unknown) as Document } },
            { new: true, useFindAndModify: false },
          )

          Logger.info(`Document >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Documento removido!" })
        } else {
          Logger.error(`Document >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error: any) => {
        Logger.error(`Error while deleting document >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }

  async getAllDocs(req: Express.Request, res: Express.Response) {
    try {
      DocumentModel.find({})
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Documento(s) não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching document on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching document on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async getSignedDocs(req: Express.Request, res: Express.Response) {
    try {
      await DocumentModel.find({ sign_status: "finished" })
        .sort(["finished_ts", -1])
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Documento(s) assinados não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching document on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching document on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async findByNameAndUpdate(req: Express.Request, res: Express.Response) {
    try {
      const filter = { path: req.body.file }
      const update = { d4sign_id: req.body.d4sign_id, signers_info: req.body.signers_info }

      await DocumentModel.findOneAndUpdate(filter, update, { useFindAndModify: false })
        .then((response) => {
          if (!response) {
            return res.status(404).json({ message: "Documento(s) não encontrado(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching document on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching document on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }
}

export default new DocumentController()
