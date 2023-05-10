import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductList} from '../server/server';
import Product from "../interface/Product";

const initialState: Product[] = ProductList;
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
         like: (state, action: PayloadAction<number>) => {
             ProductList.forEach(item => {
                 if (action.payload === item.no) {
                     item.likeCnt = item.likeCnt++;
                 }
             });
         },
        getProductList: () => {
             return ProductList;
        }
    }
});

export const {like, getProductList} = productSlice.actions;
export default productSlice.reducer;