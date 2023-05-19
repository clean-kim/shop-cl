import {Flex, Margin} from "@assets/GlobalStyle";
import img from "@assets/img/img.png";
import Calculator from "./Calculator";
import styled from "styled-components";

export default function ProductBox() {
    return (
        <ProductBoxLayout>
            <Checkbox>
                <input type="checkbox" id="icb" onInput={e => {console.log(e)}}/>
                <label htmlFor="icb" />
            </Checkbox>
            <InfoBox>
                <Flex justifyContent={`flex-start`}>
                    <ProductImg src={img} alt="상품 이미지"/>
                    <Margin ml={12}>
                        <BrandName>brand name</BrandName>
                        <Title>title title title</Title>
                    </Margin>
                </Flex>
                <Flex mt={8}>
                    <Calculator />
                    <Price>43,000원</Price>
                </Flex>
            </InfoBox>
        </ProductBoxLayout>
    );
}


const ProductBoxLayout = styled.div`
  padding: 1rem;
  border: 1px solid var(--border100);
  background: var(--ui-background);
  display: flex;
  
  img {
    width: 25%;
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
  
  div {
    flex: 2;
  }
`;

const BrandName = styled.h3`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 7px;
`;

const Title = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 7px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`;