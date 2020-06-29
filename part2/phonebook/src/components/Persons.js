import React from 'react'

const Button = ({onClick}) => {
    return(
        <div>
            <button onClick={onClick}>
                delete
            </button>
        </div>   
    )
}

const Persons = ({persons, filter, deletePerson}) => {
    return (
        <table>
            <tbody>
                {persons
                .filter(person => person.name.toLowerCase().includes(filter))
                .map((person) => 
                    <tr key={person.id}>
                        <td>{person.name}</td> 
                        <td>{person.number}</td>
                        <td><Button onClick={() => {deletePerson(person.id)}}/></td>
                    </tr> 
                )}
            </tbody>
        </table>
    )
}

export default Persons