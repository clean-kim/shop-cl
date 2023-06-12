import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Product from "@interface/Product";

const initialState: Product[] = [];
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
         like: (state, action: PayloadAction<number>) => {
             state.forEach(item => {
                 if (action.payload === item.no) {
                     item.likeCnt = item.likeCnt++;
                 }
             });
         }
    }
});

export const {like} = productSlice.actions;
export default productSlice.reducer;