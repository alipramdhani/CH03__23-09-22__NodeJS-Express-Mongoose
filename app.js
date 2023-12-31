// CORE PACKAGE/MODULE

// THIRD PARTY PACKAGE/MODULE
const express = require("express")
const morgan = require("morgan")
const swaggerUi = require("swagger-ui-express")

// OUR OWN PACKAGE/MODULE
const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express()

// memodifikasi incoming request/request body ke api kita
// middleware dari express
app.use(express.json())
app.use(morgan("dev"))

const swaggerDocument = yaml.load(
  fs.readFileSync(
    "./swagger/swagger.yaml",
    "utf-8"
  )
)

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

// biar bisa baca static file
app.use(express.static(`${__dirname}/public`))

// // OUR OWN MIDDLEWARE
// app.use((req, res, next) => {
//   console.log(
//     "hallo FSW2 di middleware kita sendiri"
//   )
//   next()
// })

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log(req.requestTime)
  next()
})

// middleware untuk check nih boleh gak di akses user tersebut === authorization
// app.use((req, res, next) => {
//   if (req.body.role !== "admin") {
//     return res.status(401).json({
//       message: "kamu gak boleh akses",
//     })
//   }

//   next()
// })

app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

module.exports = app
