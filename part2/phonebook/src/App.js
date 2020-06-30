import React, {useState, useEffect} from 'react';
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Persons from './components/Persons'
import PersonService from './services/persons'
import Notification from './components/Notification'
import './index.css'

//! start database
//! run "npm run server"

const App = () => {

    //* State Declaration
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
        
    //* Init phonebook
    useEffect(() => {
        PersonService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
    console.log('render', persons.length, 'contacts')

    //* Add new Contact
    const addPerson = (event) => {
        event.preventDefault()
        
        const sameName = persons.filter(person => person.name === newName)
        
        if (sameName.length === 0) {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            
            PersonService
                .create(newPerson)
                .then(newPersons => setPersons(persons.concat(newPersons)))
            
            setNewName('')
            setNewNumber('')

            setMessage(`${newPerson.name} added`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        } else {
            if (window.confirm(newName + ' is already added to phonebook. replace old number with new one?')){
                updatePerson(newName, newNumber)
            }
        }
    }

    //* Update contact
    const updatePerson = (name, number) => {
        const person = persons.find(p => p.name === name)
        const changedPerson = {...person, number: number}

        PersonService
            .update(person.id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(p => p.id !== person.id ? p: returnedPerson))
            })
    }

    //* Delete contact
    const deletePerson = (id) => {
        const person = persons.find(p => p.id === id)
        const deleteSentence = "Delete " + person.name + "?"
        if (window.confirm(deleteSentence)){
            PersonService
                .remove(id)
                .then(
                    setPersons(persons.filter(p => p.id !== id))
                )
        }
    }

    //* Handler 
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    //* return 
    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message = {message} />
            <Filter filter={filter} onChange={handleFilter}/>
            <h3>New contact</h3>
            <ContactForm 
                onSubmit={addPerson} 
                newName={newName} 
                handleNameChange={handleNameChange}
                newNumber={newNumber} 
                handleNumberChange={handleNumberChange}/>
            <h3>Contacts</h3>
            <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
        </div>
    )
}

export default App