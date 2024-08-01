const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/nitaiBackend')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err))


app.post('/registerUser', async (req, res) => {
    const { username, firstName, lastName, email, password } = req.body
    try {
        const user = await User.create({ username, firstName, lastName, email, password })
        res.send(user)
    }   
    catch(err) {
        console.log(err);
        res.json({status: 'error', error: 'Duplicate username or email'})
    } 
})

app.post('/loginUser', async (req, res) => {
    try {
        const{email, password} = req.body
        const user = await User.findOne({email, password})
        
        if(user) {
            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, '#secretKey123')

            return res.json({status: 'ok', user: token})
        }
    }
    catch(err) {
        console.log(err);
        res.json({status: 'error', error: 'Invalid username or password'})
    }
})


app.listen(3000, () => console.log('Server started on port 3000'))