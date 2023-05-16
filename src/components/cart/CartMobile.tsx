import styled from "styled-components";
import {CartData} from "../../interface/Product";

export default function CartMobile(params: CartData) {

    return (
        <CartMobileBox>

        </CartMobileBox>
    );
}

const CartMobileBox = styled.div`
  padding: 16px;
  background: var(--ui-01);
`;
