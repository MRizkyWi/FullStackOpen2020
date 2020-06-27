import React from 'react';

const Filter = ({filter, onChange}) => {
    return (
        <div>
            <p>search <input value={filter} onChange={onChange}/></p>
        </div>
    )
}

export default Filter