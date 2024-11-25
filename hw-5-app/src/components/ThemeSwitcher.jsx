import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function ThemeSwitcher() {
    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();

    return (
        <div style={{ margin: '20px' }}>
            <FormControlLabel control={
                <Switch
                    label={isDark ? 'Темная тема' : 'Светлая тема'}
                    checked={isDark}
                    onChange={() => dispatch(toggleTheme())} />
            }
                label={isDark ? 'Темная тема' : 'Светлая тема'} />
        </div>
    );
}

export default ThemeSwitcher;