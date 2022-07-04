import React from 'react';

export const User = ( { name, lastName, age }) => {
    // const { name, lastName, age } = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>{lastName}</p>
            <p>{age}</p>
        </div>
    )
}