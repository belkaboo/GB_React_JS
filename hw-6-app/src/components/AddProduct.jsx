import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { v4 as uuidv4 } from 'uuid';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if (!name.trim() || !description.trim() || !price || price < 0) return;

        dispatch(
            addProduct({
                id: uuidv4(),
                name,
                description,
                price: parseFloat(price),
                available,
            })
        );

        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <>
            <Typography variant="h4" component="h2">
                Добавить товар
            </Typography>
            <div className='add-product'>

                <TextField
                    label="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ margin: '10px' }}
                />
                <TextField
                    label="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ margin: '10px' }}

                />
                <TextField
                    label="Цена"
                    value={price}
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9.]/g, '');
                    }}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{ margin: '10px' }}
                />
                <FormControlLabel
                    style={{ margin: '10px' }}
                    control={
                        <Checkbox
                            checked={available}
                            onChange={(e) => setAvailable(e.target.checked)}
                            color="primary"

                        />
                    }
                    label="Доступно"
                />

                <Button
                    variant="contained"
                    color="success"
                    style={{ margin: '10px' }}
                    onClick={handleAddProduct}
                >
                    Добавить
                </Button>
            </div>
        </>
    );
}

export default AddProduct;