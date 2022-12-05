import React, { useReducer, useState } from 'react';

const ShortForm = () => {

    const [input, setInput] = useState(0)

    const submit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <h2>Short Form</h2>
            <form onSubmit={submit}>
                <label>
                    FirstName:
                    <input type="text" name="name" onBlur={(e) => setInput(e.target.value)} />
                </label> <br />
                <label>
                    LastName:
                    <input type='text' name='lastName' onBlur={(e2) => setInput(e2.target.value)}></input>
                </label> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ShortForm;