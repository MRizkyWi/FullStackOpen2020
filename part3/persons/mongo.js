const mongoose = require('mongoose')

// check whether command include password or not
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

// get password
const password = process.argv[2]

// parse url and connect
const url =
  `mongodb+srv://admin:${password}@cluster0.jjypb.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// determine database schema of Person
const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length >= 4){
    // get the name and number
    const name = process.argv[3]
    const number = process.argv[4]

    // make new person to add to database
    const person = new Person({
        name: name,
        number: number
    })
        
    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })
} else {
    // print all person in phonebook
    console.log("phonebook")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}




