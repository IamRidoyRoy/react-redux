import React from 'react';

const Child = ({ passCounter }) => {
    console.log(passCounter);
    return (
        <div>
            <h1>Hey, Child</h1>
            <h1>The current state value is : {passCounter}</h1>
        </div>
    );
};

export default Child;