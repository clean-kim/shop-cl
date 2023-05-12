import styled from "styled-components";
import {CartData} from "../../interface/Product";
import img from "../../assets/img/img.png";

export default function CartMobile(params: CartData) {
    const calculator = (sign: number) => {

    }

    return (
        <CartMobileBox>
            <ProductBox>
                <Checkbox>
                    <input type="checkbox" id="icb" onInput={e => {console.log(e)}}/>
                    <label htmlFor="icb" />
                </Checkbox>
                <ProductImg src={img} alt="상품 이미지"/>
                <InfoBox>
                    <BrandName>brand name</BrandName>
                    <Title>title title title</Title>
                    <Count>1</Count>
                    <Price>price</Price>
                </InfoBox>
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

const ProductImg = styled.img`
  border-radius: 7px;
`;

const Checkbox = styled.span`
  display: block;
  margin-right: 12px;
  
  input[type='checkbox']+label {
    display: block;
    position: relative;
    width: 18px;
    height: 18px;
  }

  input[type='checkbox']+label::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    display: block;
    background-color: var(--ui-background);
    border: 2px solid var(--border300);
    border-radius: 50%;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 1;
    width: 18px;
    height: 18px;
  }
  
  input[type='checkbox']:checked+label:before{
    position: absolute;
    content: '';
    background: url(${`/img/checked.svg`}) center no-repeat;
    background-size: 18px;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 50%;
  }
`;

const InfoBox = styled.div`
  margin-left: 10px;
`;

const BrandName = styled.div`
  font-size: 13px;
`;

const Title = styled.div`
  font-size: 14px;
  word-break: break-all;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const Count = styled.div`
  font-size: 12px;
`;