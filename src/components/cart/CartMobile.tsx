import React from 'react';
import styled from "styled-components";
import {useAppSelector} from '@modules/store';
import Product from '@interface/Product';
import ProductBox from "@components/cart/ProductBox";
import Button, {ButtonStyleGuide} from "@components/common/Button";

export default function CartMobile() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    return (
        <>
            <CartMobileBox>
                {cartSelector.map((item: Product, i) => {
                    return <ProductBox {...item} key={i}/>;
                })}
            </CartMobileBox>
            <CartMobileFooter>
                <Button setStyle={{...ButtonStyleGuide.basic01}}>주문하기</Button>
            </CartMobileFooter>
        </>
    );
}

const CartMobileBox = styled.div`
  width: 100%;
  height: calc((var(--vh, 100vh) * 100) - 90px);
  padding: 16px;
  background: var(--ui-01);
`;

const CartMobileFooter = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 58px;
  max-height: 58px;
  background: var(--primary);
`;