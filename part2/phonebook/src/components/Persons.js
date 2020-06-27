import React from 'react'

const Persons = ({persons, filter}) => {
    return (
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
    )
}

export default Persons