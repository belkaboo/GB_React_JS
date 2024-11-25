import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './MaterialUiSwitch';



function ThemeSwitcher() {
    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();

    return (
        <div style={{ margin: '20px' }}>
            <FormControlLabel control={
                <MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label={isDark ? 'Темная тема' : 'Светлая тема'}
                onChange={() => dispatch(toggleTheme())} />
        </div>
    );
}

export default ThemeSwitcher;