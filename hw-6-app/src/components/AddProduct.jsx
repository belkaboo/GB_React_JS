import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { v4 as uuidv4 } from 'uuid';

function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        if (!name || !description || !price) return;

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
        <div>
            <h2>Добавить продукт</h2>
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Цена"
                value={price}
                onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
                }}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label>
                Доступно:
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </label>
            <button onClick={handleAddProduct}>Добавить</button>
        </div>
    );
}

export default AddProduct;