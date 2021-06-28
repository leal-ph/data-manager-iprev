import Express from "express"
import MeetingModel from "../models/MeetingModel"
import Logger from "../modules/logger"
import { startOfDay, endOfDay } from "date-fns"
import LawyerModel from "../models/LawyerModel"

class MeetingController {
  async create(req: Express.Request, res: Express.Response) {
    Logger.info(`Creating new Meeting register on DB...`)

    const Meeting = new MeetingModel(req.body)

    Meeting.save({ checkKeys: false })
      .then((response) => {
        Logger.info(`New Meeting successfully saved on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while saving Meeting on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async update(req: Express.Request, res: Express.Response) {
    Logger.info(`Updating Meeting >> ${req.params.id} << on DB...`)

    if (req.body.date) {
      req.body.date_ts = new Date(req.body.date).getTime() / 1000
    }

    MeetingModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((response) => {
        Logger.info(`Meeting >> ${req.params.id} << successfully updated on DB...`)
        return res.status(200).json(response)
      })
      .catch((error) => {
        Logger.error(`Error while updating Meeting ${req.params.id} on DB >> ${error}...`)
        return res.status(500).json(error)
      })
  }

  async findMeetingByFilter(req: Express.Request, res: Express.Response) {
    try {
      if (!req.body.filter) {
        Logger.error(`Filter not specified for find Meeting on DB...`)
        return res.status(400).json({
          message: "Filtro não especificado no body da requisição!",
        })
      }

      const filter = req.body.filter

      MeetingModel.find(filter)
        .then((response) => {
          if (response.length < 1) {
            return res.status(404).json({ message: "Reunião(ões) não encontrada(s)!" })
          }
          return res.status(200).json(response)
        })
        .catch((error) => {
          Logger.error(`Error while searching Meeting on DB >> ${error}...`)
          return res.status(500).json(error)
        })
    } catch (error) {
      Logger.error(`Error while searching Meeting on DB >> ${error}...`)
      return res.status(500).json(error)
    }
  }

  async findLawyerMeetings(req: Express.Request, res: Express.Response) {
    try {
      let info = false

      if (req.body.info) {
        info = req.body.info
      }

      const filter = {
        date_ts: { $gte: req.body.startts, $lte: req.body.finalts },
        lawyer: req.body.lawyer,
      }
      if (info) {
        MeetingModel.find(filter)
          .select("+informations")
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(404)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      } else {
        await MeetingModel.find(filter)
          .populate("lawyer", "name lastname oab_register")
          .populate("client", "name lastname cpf")
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(404)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async findUserMeetings(req: Express.Request, res: Express.Response) {
    try {
      let info = false
      let filter = {}

      if (req.body.info) {
        info = req.body.info
      }

      if (req.body.mode == "future") {
        filter = {
          date_ts: { $gte: new Date().getTime() / 1000 },
          client: req.body.client,
        }
      } else if (req.body.mode == "past") {
        filter = {
          date_ts: { $lte: new Date().getTime() / 1000 },
          client: req.body.client,
        }
      } else if (!req.body.mode) {
        filter = {
          date_ts: { $gte: req.body.startts, $lte: req.body.finalts },
          client: req.body.client,
        }
      }

      if (info) {
        MeetingModel.find(filter)
          .select("+informations")
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(200)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      } else {
        MeetingModel.find(filter)
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(200)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async findDailyMeetings(req: Express.Request, res: Express.Response) {
    try {
      let info = false

      if (req.body.info) {
        info = req.body.info
      }

      const filter = {
        date: {
          $gte: startOfDay(new Date(req.body.date)),
          $lte: endOfDay(new Date(req.body.date)),
        },
        lawyer: req.body.lawyerID,
      }

      if (info) {
        await MeetingModel.find(filter)
          .select("+informations")
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(404)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      } else {
        MeetingModel.find(filter)
          .then((response) => {
            if (response.length < 1) {
              return res
                .status(404)
                .json({ message: "Nao há reuniões agendadas para o período especificado!" })
            }
            return res.status(200).json(response)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async calculateWeeklyDisponibility(req: Express.Request, res: Express.Response) {
    const dateToString = (date: Date) => {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }

    const nowDate = new Date()
    const sumDate = new Date()
    const tmpDate = new Date()

    sumDate.setDate(sumDate.getDate() + 14)

    const filter = {
      date: {
        $gte: startOfDay(nowDate),
        $lte: endOfDay(sumDate),
      },
    }

    const calendar: Map<
      string,
      { free: boolean; allocated: string[]; notAllocated: string[] }[]
    > = new Map()

    for (let i = 0; i < 14; i++) {
      const dayArray = [
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
        { free: true, allocated: [], notAllocated: [] },
      ]
      calendar.set(dateToString(tmpDate), dayArray)
      tmpDate.setDate(tmpDate.getDate() + 1)
    }

    MeetingModel.find(filter)
      .select("+informations")
      .then((meetings) => {
        // Busca a lista de advogados
        LawyerModel.find()
          .then((lawyers) => {
            // Iterate na lista de calendar para construir a lista de dias
            calendar.forEach((value, key) => {
              // Busca as reuniões do dia
              const dayMeetings = meetings.filter((meeting) => {
                return dateToString(meeting.date) === key
              })

              // Preencha por dia a lista de advogados por horário (slot)
              dayMeetings.map((meeting) => {
                value[meeting.slot].allocated.push(meeting.lawyer._id)
              })

              // Busca os ids dos advogados cadastrados
              const ids = lawyers.map((lawyer) => lawyer._id)

              // Atualiza o status do dia
              const dayState = value.map((v) => {
                const tmpFound: { id: string; remove: boolean }[] = []

                if (v.allocated.length === 0) {
                  v.notAllocated = ids
                  return v
                }

                ids.map((id) => {
                  v.allocated.map((alocId) => {
                    tmpFound.push({ id, remove: id === alocId })
                  })
                })

                const result = tmpFound.filter((tmp) => {
                  return tmp.remove
                })

                if (result.length > 0) {
                  v.notAllocated = result.map((removed) => removed.id)
                } else {
                  v.notAllocated = []
                }

                if (v.notAllocated.length === 0) {
                  v.free = false
                }
                return v
              })

              calendar.set(key, dayState)
            })

            const returnValue: any[] = []

            calendar.forEach((value, key) => returnValue.push({ date: key, data: value }))

            return res.status(200).json(returnValue)
          })
          .catch((error) => {
            return res.status(500).json(error)
          })
      })
      .catch((error) => {
        return res.status(500).json(error)
      })
  }

  async deleteMeetingbyID(req: Express.Request, res: Express.Response) {
    Logger.info(`Deleting Meeting >> ${req.params.id} << on DB...`)

    await MeetingModel.findOneAndDelete({ _id: req.params.id })
      .then((response) => {
        if (response) {
          Logger.info(`Meeting >> ${req.params.id} << successfully removed from DB...`)
          return res.status(200).json({ success: "Reunião removida!" })
        } else {
          Logger.error(`Meeting >> ${req.params.id} << not found on DB...`)
          return res.status(404).json({ ERROR: "_id não encontrado!" })
        }
      })
      .catch((error) => {
        Logger.error(`Error while deleting Meeting >> ${req.params.id} on DB > ${error}...`)
        return res.status(500).json(error)
      })
  }
}

export default new MeetingController()
