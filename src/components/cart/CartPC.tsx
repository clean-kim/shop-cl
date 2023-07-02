import React from 'react';
import styled from "styled-components";
import {useAppSelector} from '@modules/store';
import Product from '@interface/Product';
import CartItemMobile from '@components/cart/CartItemMobile';

export default function CartPC() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    return (
        <CartPCBox>
            {cartSelector.map((item: Product, i) => {
                return <CartItemMobile {...item} key={i}/>;
            })}
        </CartPCBox>
    );
}

const CartPCBox = styled.div`
  width: 100%;
  margin-top: 30%;
  padding: 16px;
  background: var(--ui-01);
`;
