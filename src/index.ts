import express from 'express'
import diariesRoutes from './routes/diariesRoute'

const app = express()
app.use(express.json())

app.use('/api/diaries', diariesRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`)
})
