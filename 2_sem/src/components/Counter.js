import React, { useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h3>Задание 1</h3>
            <div className='container todo'>
                <p>Счётчик  - {counter}</p>
                <button onClick={() => setCounter(counter + 1)}>Click me...</button>
            </div>
        </>
    );
}

export default Counter;