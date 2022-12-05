import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [counter, setCount] = useState(0);
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>Parent!</h1>

            <button onClick={() => setCount(count => count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
            <button onClick={reset}>Make Zero</button>

            <Child passCounter={counter}></Child>
        </div>
    );
};

export default Parent;