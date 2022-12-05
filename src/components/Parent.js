import { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';



const Parent = () => {
    const reset = () => {
        setCount(0);
    }
    const { counter, setCount } = useContext(COUNTER_CONTEXT)
    return (

        <div >
            <h1>Parent!</h1>
            <h4>{counter}</h4>
            <button onClick={() => setCount(count => count + 1)}>+</button>
            <button onClick={() => setCount(count => count - 1)}>-</button>
            <button onClick={reset}>Make Zero</button>

            <Child></Child>
        </div>



    );
};

export default Parent;