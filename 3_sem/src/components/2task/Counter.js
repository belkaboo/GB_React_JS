import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const decreaseCount = () => {
        if (counter === 0) return;
        setCounter(counter - 1)
    }

    return (
        <>
            <h3>{counter}</h3>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button onClick={decreaseCount}>Уменьшить</Button>
                <Button onClick={() => setCounter(counter + 1)} >Увеличить</Button>
            </ButtonGroup>
        </>
    );
};
