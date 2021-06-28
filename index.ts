// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()

// Realiza a importação do módulo express para importrução da API REST
import Express from "express"
import cors from "cors"
import DocumentRoutes from "./src/routes/DocumentRoutes"
import FormRoutes from "./src/routes/FormRoutes"
import LawyerRoutes from "./src/routes/LawyerRoutes"
import LoginLogoutRoutes from "./src/routes/LoginLogoutRoutes"
import MeetingRoutes from "./src/routes/MeetingRoutes"
import PaymentRoutes from "./src/routes/PaymentRoutes"
import ProfileRoutes from "./src/routes/ProfileRoutes"
import LawsuitRoutes from "./src/routes/LawsuitRoutes"
import QuestionRoutes from "./src/routes/QuestionRoutes"
import UserRoutes from "./src/routes/UserRoutes"
import ClientRoutes from "./src/routes/ClientRoutes"
import GroupRoutes from "./src/routes/GroupRoutes"
import MailRoutes from "./src/routes/MailRoutes"
import PagesRoutes from "./src/routes/PagesRoutes"

import bodyParser from "body-parser"
import Logger from "./src/modules/logger"

const server = Express()

server.use(Express.json())
server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))

server.use("/", ClientRoutes)
server.use("/", DocumentRoutes)
server.use("/", FormRoutes)
server.use("/", LawyerRoutes)
server.use("/", LoginLogoutRoutes)
server.use("/", MeetingRoutes)
server.use("/", PaymentRoutes)
server.use("/", ProfileRoutes)
server.use("/", LawsuitRoutes)
server.use("/", QuestionRoutes)
server.use("/", UserRoutes)
server.use("/", GroupRoutes)
server.use("/", MailRoutes)
server.use("/", PagesRoutes)

const PORT = parseInt(process.env.SERVICEPORT || "5000")

server.listen(PORT, () => {
  Logger.info(`Data-Manager Server started on port ${PORT}`)
})
