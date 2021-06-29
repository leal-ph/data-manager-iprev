import Winston from "winston"

const { combine, timestamp, prettyPrint, printf } = Winston.format

const Logger = Winston.createLogger({
  format: combine(
    timestamp(),
    prettyPrint(),
    printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`),
  ),
  transports: [
    new Winston.transports.Console(),
    new Winston.transports.File({ filename: "app.log" }),
  ],
})

export default Logger
