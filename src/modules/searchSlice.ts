import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: string | number | readonly string[] = '';
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCurrentSearchValue: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})

export const {setCurrentSearchValue} = searchSlice.actions;
export default searchSlice.reducer;