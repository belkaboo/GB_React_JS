import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../store/productSlice';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <>
            <h4>Список товаров</h4>
            <div className='products'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price} <span className='dollar'>$</span></p>
                        <div className='avaliable'>
                            <p>Доступность:</p>
                            {product.available ? <CheckCircleIcon color='success' fontSize='large' /> :
                                <DisabledByDefaultIcon color='error' fontSize='large' />}
                        </div>
                        <Button
                            variant="contained"
                            style={{ margin: '0 10px' }}
                            onClick={() => dispatch(toggleAvailability(product.id))}>
                            Переключить доступность
                        </Button>
                        <IconButton
                            color="error"
                            onClick={() => dispatch(deleteProduct(product.id))}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;


