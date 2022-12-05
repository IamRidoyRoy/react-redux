import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';

const Child = () => {
    const { counter } = useContext(COUNTER_CONTEXT)
    return (
        <div>
            <h1>Hey, Child</h1>
            <h1>The current state value is : {counter}</h1>
        </div>
    );
};

export default Child;

