import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../store/productSlice';
import EditProduct from './EditProduct';


import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <Typography variant="h4" component="h2" marginTop={4}>
                Список товаров
            </Typography>

            {/* //TODO Вывести карточку товара в отдельный компонент + отстилизовать(много символов отображается криво)   */}

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
                        <div className='product-buttons'>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => handleEditClick(product)}
                            >
                                Редактировать
                            </Button>
                            <IconButton
                                color="error"
                                onClick={() => dispatch(deleteProduct(product.id))}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent style={{ backgroundColor: '#e4r4e4' }} >
                    {selectedProduct && (
                        <EditProduct product={selectedProduct} onClose={handleClose} />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ProductList;


