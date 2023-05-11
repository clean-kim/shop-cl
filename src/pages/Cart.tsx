import CartMobile from "../components/cart/CartMobile";
import {M, PC} from "../components/common/MediaQuery";
import styled from "styled-components";
import {useEffect} from "react";
import {CartList} from '../server/server';
import EmptyCart from "../components/cart/EmptyCart";


export default function Cart() {
    useEffect(() => {

    }, []);

    return (
        <>
            {CartList.itemList && CartList.itemList?.length > 0 ?
                <>
                    <M elem={<CartMobile {...CartList} />} />
                    <PC elem={<p>cart pc</p>} />
                </>
                :
                <EmptyCart />}
        </>
    );
}
