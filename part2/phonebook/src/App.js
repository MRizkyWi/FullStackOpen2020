import React, {useState} from 'react';
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { 
            name: 'Arto Hellas', 
            number: '040-123456' 
        },
        { 
            name: 'Ada Lovelace', 
            number: '39-44-5323523' 
        },
        { 
            name: 'Dan Abramov', 
            number: '12-43-234345' 
        },
        { 
            name: 'Mary Poppendieck', 
            number: '39-23-6423122' 
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        
        const sameName = persons.filter(person => person.name === newName)

        if (sameName.length === 0){
            const newPerson = {
                name: newName,
                number: newNumber
            }
    
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        } else {
            window.alert(newName + ' is already added to phonebook')
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} onChange={handleFilter}/>
            <h3>New contact</h3>
            <ContactForm 
                onSubmit={addPerson} 
                newName={newName} 
                handleNameChange={handleNameChange}
                newNumber={newNumber} 
                handleNumberChange={handleNumberChange}/>
            <h3>Contacts</h3>
            <Persons persons={persons} filter={filter}/>
        </div>
    )
}

export default App