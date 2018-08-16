import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

//Only for development
import devBundle from './devBundle' //Comment for Prod environment

const app = express()

devBundle.compile(app) //Comment for Prod environemnt
	/* Configure Express*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/', userRoutes)
app.use('/', authRoutes)

//Handle authentication related erros thrown by express-jwt while JWT token validation during incoming requests
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"Authentication error" : err.name + ": " + err.message})
  }
})

app.get('/', (req, res) => {
  res.status(200).send(Template())
})

export default app
