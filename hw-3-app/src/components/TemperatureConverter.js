
import './TemperatureConverter.css';
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value.trim();

        if (value === '' || isNaN(value)) {
            setCelsius('');
            setFahrenheit('');
            return;
        }

        setCelsius(value);
        const converted = (parseFloat(value) * 9) / 5 + 32;
        setFahrenheit(converted.toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value.trim();

        if (value === '' || isNaN(value)) {
            setFahrenheit('');
            setCelsius('');
            return;

        }

        setFahrenheit(value);
        const converted = ((parseFloat(value) - 32) * 5) / 9;
        setCelsius(converted.toFixed(2));

    };

    return (
        <Box className='box' >
            <h3>Конвертер температуры</h3>
            <div className='converter'>
                <TextField
                    className='text_field'
                    label="Градусы Цельсия"
                    variant="outlined"
                    value={celsius}
                    onChange={handleCelsiusChange}
                    placeholder="Введите температуру в °C"
                />
                {/* так, для красотв */}
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45">
                    <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
                </svg>
                <TextField
                    className='text_field'
                    label="Градусы Фаренгейта"
                    variant="outlined"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                    placeholder="Введите температуру в °F"
                />
            </div>
        </Box>
    );
}

export default TemperatureConverter;