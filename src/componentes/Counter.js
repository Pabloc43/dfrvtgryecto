import {useState} from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }
    
    return (
    <div className="pb-4">
        <h2>Counter</h2>
        <h3 className='my-4'>{counter}</h3>
        <button className="btn btn-primary me-2" 
        onClick={decrease}>-1</button>
        <button className="btn btn-primary me-2"
        onClick={reset}>Reset</button>
        <button className="btn btn-primary"
        onClick={increase}>+1</button>
    </div>
  )
}
