import React, { useState } from 'react';
import { Button, TextField, Card, Typography } from '@mui/material';


export default function TextDisplayForm() {

    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');

    const handleText = (e) => {
        e.preventDefault();
        setDisplayedText(text);
        setText('');
    }

    return (
        <>
            <TextField
                variant="outlined"
                className='textfield'
                fullWidth
                label='Введите текст'
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </TextField>
            <Button variant='contained'
                style={{ marginTop: '20px' }}
                fullWidth
                onClick={handleText}
            >
                Отобразить текст
            </Button>
            <Typography
                variant="h5"
                style={{ margin: '20px', padding: '10px' }}
            >
                {displayedText}
            </Typography>

        </>
    );
};





/*
Создание поля ввода (TextField)

Добавить TextField для ввода текста пользователем.

Установить метку (label) поля ввода на "Введите текст".

Сделать поле ввода на всю ширину (fullWidth).

Разместить кнопку под полем ввода.

Установить текст кнопки на "Отобразить текст".

При нажатии на кнопку введенный текст должен отображаться под кнопкой.

Отображение введенного текста

Использовать состояние для хранения введенного и отображаемого текста.

При нажатии на кнопку текст из поля ввода должен отображаться в стилизованной карточке (Card) под кнопкой.

Стилизация отображаемого текста

Для отображения текста использовать компонент Typography с вариантом h5.
*/
