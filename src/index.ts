// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()

// Realiza a importação do módulo express para importrução da API REST
import Express from "express"
import cors from "cors"
import helmet from "helmet"
import DocumentRoutes from "./routes/DocumentRoutes"
import FormRoutes from "./routes/FormRoutes"
import LawyerRoutes from "./routes/LawyerRoutes"
import LoginLogoutRoutes from "./routes/LoginLogoutRoutes"
import MeetingRoutes from "./routes/MeetingRoutes"
import PaymentRoutes from "./routes/PaymentRoutes"
import ProfileRoutes from "./routes/ProfileRoutes"
import LawsuitRoutes from "./routes/LawsuitRoutes"
import QuestionRoutes from "./routes/QuestionRoutes"
import UserRoutes from "./routes/UserRoutes"
import ClientRoutes from "./routes/ClientRoutes"
import GroupRoutes from "./routes/GroupRoutes"
import MailRoutes from "./routes/MailRoutes"
import PagesRoutes from "./routes/PagesRoutes"

import Logger from "./modules/logger"
import bodyParser from "body-parser"

const server = Express()

server.use(Express.json())
server.use(cors())
server.use(helmet())
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
