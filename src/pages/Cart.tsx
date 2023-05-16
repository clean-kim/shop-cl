import CartMobile from "../components/cart/CartMobile";
import {M, PC} from "../components/common/MediaQuery";
import {useEffect} from "react";
import {CartList} from '../server/server';
import EmptyCart from "../components/cart/EmptyCart";


export default function Cart() {

    const datas = CartList();

    useEffect(() => {}, []);

    return (
        <>
            {datas.itemList && datas.itemList.length > 0 ?
                <>
                    <M elem={<CartMobile {...datas} />} />
                    <PC elem={<p>cart pc</p>} />
                </>
                :
                <EmptyCart />}
        </>
    );
}
