// link: https://nameless-peak-80192.herokuapp.com/

require('dotenv').config()

const express = require('express')
const { request } = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

morgan.token('body', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())

app.get('/info', (request, response) => {
    
    var now = new Date;

    Person.find({}).then(persons => {
        response.send('<p>Phonebook has info for '+ persons.length + ' people </p><p>'+ now.toString() + '</p>')
    })
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    console.log(body)

    if (!body.name){
        return response.status(400).json({
            error: 'missing name'
        })
    } 
    
    if (!body.number){
        return response.status(400).json({
            error: 'missing number'
        })
    }

    const newPerson = new Person ({
        name: body.name,
        number: body.number
    })

    newPerson.save().then(person => {
        console.log('person saved')
        response.json(person)
    })    
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})