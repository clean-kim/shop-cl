import Product from "@interface/Product";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Product[] = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            const data = action.payload;
            const {option} = data;
            const newArr: Product[] = [];
            state.forEach((item: Product) => {
                // 중복 상품 카운트 증가
                if (item.no === data.no && (option && item.count) && item.option?.includes(option)) {
                    item.count = item.count++;
                }
                newArr.push(item);
            });
            newArr.push(data);
            return newArr;
        }
    }
});

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;