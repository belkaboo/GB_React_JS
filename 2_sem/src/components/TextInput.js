import React, { useState, useEffect } from 'react';

function TextInput() {
    const [text, setText] = useState('');

    const ChangeText = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <h3>Задание 2</h3>
            <div className='container'>
                <input type='text' className='text_input' value={text} onChange={ChangeText}></input>
                <p className='text_output'>{text}</p>
            </div>
        </>

    );
}

export default TextInput;