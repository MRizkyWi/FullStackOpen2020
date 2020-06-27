import React, {useState} from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '080989999'
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
            <input value={filter} onChange={handleFilter}/>
            <h3>New contact</h3>
            <form onSubmit={addPerson}>
                <table>
                    <tbody>
                        <tr>
                            <td>name:</td>
                            <td><input value={newName} onChange={handleNameChange}/></td>
                        </tr>
                        <tr>
                            <td>number:</td>
                            <td><input value={newNumber} onChange={handleNumberChange}/></td>
                        </tr>
                        <tr>
                            <td><button type="submit">add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <h3>Contacts</h3>
            <table>
                <tbody>
                    {persons
                    .filter(person => person.name.toLowerCase().includes(filter))
                    .map((person, id) => 
                        <tr key={id}>
                            <td>{person.name}</td> 
                            <td>{person.number}</td>
                        </tr> 
                    )}
                </tbody>
            </table>
            
        </div>
    )
}

export default App