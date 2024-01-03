const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users.routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', usersRouter)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`)
        })
    } catch (e) {
        console.log(e.message)
    }    
}

start()
