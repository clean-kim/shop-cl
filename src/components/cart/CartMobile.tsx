import React from 'react';
import styled from "styled-components";
import {useAppSelector} from '@modules/store';

export default function CartMobile() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    console.log('cartmobile >> ', cartSelector);
    return (
        <CartMobileBox>

        </CartMobileBox>
    );
}

const CartMobileBox = styled.div`
  padding: 16px;
  background: var(--ui-01);
`;
