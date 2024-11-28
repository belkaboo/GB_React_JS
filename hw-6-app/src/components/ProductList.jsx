import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../store/productSlice';

function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Список продуктов</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: {product.price} <span>$</span></p>
                    <p>Доступно: {product.available ? 'Да' : 'Нет'}</p>
                    <button onClick={() => dispatch(toggleAvailability(product.id))}>
                        Переключить доступность
                    </button>
                    <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;