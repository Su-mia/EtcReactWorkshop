import React, { useState } from 'react';
import { ReactDOM } from 'react';
import "../src/App.css";

const CounterWithState = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <p>you clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

const CounterWithoutState = () => {
    let count = 0;

    return (
        <div className="card">
            <p>you clicked {count} times </p>
            <button onClick={() => {
                count = count + 1
                console.log(count)
            }}>
                Click me
            </button>
            
        </div>
    );
}

const SecondSection = () => {
    return (
        <div className='container'>
            <h1 >
                useState Hook importance - counter -
            </h1>
            <div className='examples'>
                <CounterWithState />
                <CounterWithoutState />
            </div>
            
        </div>
    );
}

export default SecondSection;
