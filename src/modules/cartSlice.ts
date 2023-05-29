import Product from "@interface/Product";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Product[] = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            let data: Product | null = action.payload;
            const {option} = data;
            const newArr: Product[] = [];

            if (state.length > 0) {
                state.forEach((item: Product) => {
                    // 중복 상품(옵션 동일) 카운트 증가
                    if (!(data) || item.no === data.no && option !== undefined && item.option?.includes(option)) {
                        if (item.count !== undefined) {
                            const count = item.count+1;
                            newArr.push({...item, count});
                        }
                        data = null;
                    } else {        // 중복 상품 아닐 때
                        newArr.push({...item});
                    }
                });
                if(!data) {
                    newArr.push(data);
                }
            } else {
                newArr.push(data);
            }
            return newArr;
        },
        removeCart : (state, action: PayloadAction<number>) => {
            // TODO
            return state.map((item: Product) => item.no !== action.payload);
        }
    }
});

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;