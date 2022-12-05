import React, { useReducer } from 'react';

const ShortForm = () => {

    // const [input, setInput] = useState(0)



    const initialState = {
        firstName: '',
        lastName: ''
    }
    const reducer = (state, action) => {
        switch (action.type) {

        }
        console.log(action)
        if (action.type == "Input") {
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        }
        console.log(action)
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (event) => {
        event.preventDefault();
        console.log(state)

    }

    return (
        <div>
            <h2>Short Form</h2>
            <form onSubmit={submit}>
                <label>
                    FirstName:
                    <input type="text" name="firstName" onBlur={(e) => dispatch({ type: "Input", payload: { name: e.target.name, value: e.target.value } })} />
                </label> <br />
                <label>
                    LastName:
                    <input type='text' name='lastName' onBlur={(e) => dispatch({ type: 'Input', payload: { name: e.target.name, value: e.target.value } })}></input>
                </label> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ShortForm;