// Realiza a importação do módulo mongoose para conexão com o MongoDB
import Mongoose from "mongoose"

let DBHOST: string | undefined
let constring: string
const DBNAME = process.env.DBNAME || "portal-iprev"

if (!process.env.DBTYPE) {
  constring = `mongodb://mongodb:27017/${DBNAME}?authSource=admin`
} else if (process.env.DBTYPE && process.env.DBTYPE === "LOCAL") {
  constring = `mongodb://mongodb:27017/${DBNAME}?authSource=admin`
} else if (process.env.DBTYPE && process.env.DBTYPE === "CLOUD") {
  DBHOST = process.env.DBHOST
  constring = `mongodb+srv://${DBHOST}/${DBNAME}?authSource=admin`
} else {
  DBHOST = process.env.DBHOST || "bocayuvaapp.vf3gf.mongodb.net"
  constring = `mongodb+srv://${DBHOST}/${DBNAME}?authSource=admin`
}

// const DBPORT = process.env.DBPORT || "27017"
const DBUSER = process.env.DBUSER || "root"
const DBPASS = process.env.DBPASS || "iprev@2020"

// Realiza a conexão entre o módulo mongoose o banco de dados
Mongoose.connect(constring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  user: DBUSER,
  pass: DBPASS,
})

// Exportando o módulo mongoose para utilização em outros scripts
export default Mongoose
