import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

AppDataSource.initialize().then(async () => {
    app.get('/', async (req, res) => {
        const users = await AppDataSource.manager.find(User)
        res.json(users)
    })

    app.post('/', async (req, res) => {
        const users = await AppDataSource.manager.save(req.body)
        res.json(users)
    })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})