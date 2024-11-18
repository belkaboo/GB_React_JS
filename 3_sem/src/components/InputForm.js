import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


function InputForm() {

    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    useEffect(() => {
        console.log('Input value changed:', inputValue);
    }, [inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');

    };

    return (
        <div className='task'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type='submit' variant="contained">Submit</Button>
            </form>
            {submittedValue && <p>Submitted value: {submittedValue}</p>}
        </div>
    );
}

export default InputForm;