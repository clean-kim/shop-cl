import React from 'react';
import styled from "styled-components";
import {useAppSelector} from '@modules/store';
import Product from '@interface/Product';
import CartItemMobile from '@components/cart/CartItemMobile';

export default function CartMobile() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    console.log('cartSelector >> ', cartSelector);
    return (
        <CartMobileBox>
            {cartSelector.map((item: Product, i) => {
                return <CartItemMobile {...item} key={i}/>;
            })}
        </CartMobileBox>
    );
}

const CartMobileBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;
  background: var(--ui-01);
`;
