import CartMobile from "../components/cart/CartMobile";
import {M, PC} from "../components/common/MediaQuery";
import styled from "styled-components";

export default function Cart() {
    return (
        <CartLayout>
            <M elem={<CartMobile />} />
            <PC elem={<p>cart pccccc</p>} />
        </CartLayout>
    );
}

const CartLayout = styled.section`
  padding-top: 50px;
`;