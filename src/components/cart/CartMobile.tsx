import styled from "styled-components";
import {CartData} from "../../interface/Product";
import img from "../../assets/img/img.png";

export default function CartMobile(params: CartData) {

    return (
        <CartMobileBox>
            <ProductBox>
                <Checkbox htmlFor="checkbox">
                    <input type="checkbox" id="checkbox"/>
                    <span></span>
                </Checkbox>
                <img src={img} alt="상품 이미지"/>
            </ProductBox>
        </CartMobileBox>
    );
}

const CartMobileBox = styled.div`
  padding: 16px;
  background: var(--ui-01);
`;

const ProductBox = styled.div`
  padding: 1rem;
  border: 1px solid var(--border100);
  background: var(--ui-background);
  display: flex;
  
  img {
    width: 64px;
    height: 64px;
  }
`;

const Checkbox = styled.label`
  position: relative;
  width: 18px;
  margin-right: 8px;
  user-select: none;
  
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  
  input[type=checkbox] {
    appearance: none;
  }
  
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1xp solid var(--border200);
    border-radius: 100%;
  }
`;