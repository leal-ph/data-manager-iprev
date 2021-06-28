// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeMailer = require("nodemailer")

const Transport = NodeMailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "push@bocayuvaadvogados.com.br", // generated ethereal user
    pass: "Bca@2020", // generated ethereal password
  },
})

export default Transport
