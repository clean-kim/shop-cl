import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productSlice from "./productSlice";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    productSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,

});

export default store;
export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;