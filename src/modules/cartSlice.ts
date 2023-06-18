import Product from "@interface/Product";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: Product[] = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            const data: Product | null = action.payload;
            const {option} = data;
            const newArr: Product[] = [];
            if (state.length > 0) {
                // 중복 아닌 리스트
                const normalList = state.filter((item: Product) => !(data) || item.no !== data.no);
                normalList.forEach((item: Product) => {
                    newArr.push(item);
                });
                // 중복 리스트
                const duplicateItem = state.filter((item: Product) => !(data) || item.no === data.no && option !== undefined && item.option?.includes(option));
                if (duplicateItem.length > 0) {
                    duplicateItem.forEach((item: Product) => {
                        if (item.count) {   // 중복일 때 카운트만 증가
                            const count = item.count+1;
                            newArr.push({...item, count});
                        }
                    })
                } else {
                    newArr.push(data);
                }
            } else {
                newArr.push(data);
            }
            return newArr;
        },
        removeCart : (state, action: PayloadAction<number>) => {
            return state.filter((item: Product) => item.no !== action.payload);
        }
    }
});

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;