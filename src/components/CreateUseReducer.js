import React, { useReducer } from 'react';

const CreateUseReducer = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type == "Increment") {
            return state + action.payload;
        }
        else if (action.type == "Decrement") {
            return state - 1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Create Counter using "useReducer Hook"</h2>
            <p>current State: {state} </p>
            <button onClick={() => dispatch({ type: 'Increment', payload: 5 })}>+</button>
            <button onClick={() => dispatch({ type: 'Decrement' })} >-</button>
        </div>
    );
};

export default CreateUseReducer;