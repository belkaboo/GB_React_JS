import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
        //     updateProduct: (state, action) => {
        //         const index = state.findIndex((product) => product.id === action.payload.id);
        //         if (index !== -1) {
        //             state[index] = { ...state[index], ...action.payload };
        //         }
        // },
        toggleAvailability: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }
        },
    },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productSlice.actions;

export default productSlice.reducer;