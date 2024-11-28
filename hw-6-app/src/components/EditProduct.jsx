import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productSlice';
import { TextField, Button } from '@mui/material';

function EditProduct({ product, onClose }) {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (!name.trim() || !description.trim() || !price || price < 0) return;

        dispatch(
            updateProduct({
                id: product.id,
                name,
                description,
                price: parseFloat(price)
            })
        );
        onClose();
    };

    return (
        <div>
            <h2>Редактировать продукт</h2>
            <TextField
                label="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Цена"
                value={price}
                onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
                }}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                style={{ marginRight: '10px' }}
            >
                Сохранить
            </Button>
            <Button variant="outlined" color="secondary" onClick={onClose}>
                Закрыть
            </Button>
        </div>
    );
}

export default EditProduct;