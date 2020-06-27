import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

        
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, 'contacts')

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