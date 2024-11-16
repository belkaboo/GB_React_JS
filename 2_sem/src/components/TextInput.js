import React, { useState } from 'react';

function TextInput() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <h3>Задание 2</h3>
            <div className='container'>
                <input type='text' className='text_input' value={text} onChange={handleChange}></input>
                <p className='text_output'>{text}</p>
            </div>
        </>

    );
}

export default TextInput;