import express from 'express' //ESM
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'
import authRoutes from './routes/authRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'

//Variables de entonro
dotenv.config()

//Configurar la app
const app = express()

//Leer datos via body
app.use(express.json())

//Conectar a base de datos
db()

//configurar CORS
const whitelist = [process.env.FRONTEND_URL, undefined]

const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            //Permite la conexion
            callback(null,true)
        }else{
            //No permitir la conexion
            callback(new Error('Error de CORS'))
        }
    }
}

app.use(cors(corsOptions))

//Definir una ruta
app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)

//Definir puerto
const PORT = process.env.PORT || 4000

//Arracnar app
app.listen(PORT, () =>{
    console.log(colors.blue('El servidor se esta ejecuntando en el puerto:',colors.bold(PORT)))
})