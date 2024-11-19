import Button from '@mui/material/Button'
import React, { useState } from 'react';


function ThemeSwitcher({ theme, setTheme }) {

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Button variant='contained' onClick={toggleTheme}>
            Theme Switcher
        </Button>
    );
}

export default ThemeSwitcher;