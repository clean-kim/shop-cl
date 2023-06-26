import {Routes, Route} from "react-router";
import Cart from "@pages/Cart";
import Main from "@pages/Main";
import ProductDetail from "@pages/ProductDetail";
import CategoryList from '@pages/CategoryList';
import SearchResult from '@pages/SearchResult';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:category' element={<CategoryList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:no' element={<ProductDetail />} />
            <Route path='/search/:title' element={<SearchResult />} />
        </Routes>
    )
}