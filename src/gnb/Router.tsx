import {Routes, Route} from "react-router";
import Cart from "@pages/Cart";
import Main from "@pages/Main";
import ProductDetail from "@pages/ProductDetail";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail' element={<ProductDetail />} />
        </Routes>
    )
}