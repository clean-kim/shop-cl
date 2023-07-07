import {Flex} from "@assets/GlobalStyle";
import Calculator from "./Calculator";
import styled from "styled-components";
import Product from "@interface/Product";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@modules/store";
import {removeCart} from "@modules/cartSlice";
import CheckboxRound from '@components/common/CheckboxRound';

export default function ProductBox(props: Product) {
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct({...props});
    }, [props]);

    const dispatch = useAppDispatch();
    const onRemoveButtonHandler = (no: number) => {
        dispatch(removeCart(no));
    }

    return (
        <ProductBoxLayout>
            <CheckboxBlock>
                <CheckboxRound />
            </CheckboxBlock>
            <RemoveButton onClick={e => onRemoveButtonHandler(product?.no as number)}/>
            <Figure>
                <ProductImg src={product?.img} alt="상품 이미지"/>
                <InfoBlock>
                    <InfoBlockTop>
                        <BrandName>{product?.brandName}</BrandName>
                    </InfoBlockTop>
                    <Title>{product?.title}</Title>
                    <OptionBlock>
                        <div>{`옵션: ${product?.option}`}</div>
                        <div>{`수량: ${product?.count}`}</div>
                    </OptionBlock>
                </InfoBlock>
            </Figure>
            <Flex mt={14} justifyContent={`space-between`}>
                <Calculator />
                <Price>{`${product?.priceText}원`}</Price>
            </Flex>
        </ProductBoxLayout>
    );
}


const ProductBoxLayout = styled.li`
  position: relative;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid var(--border100);
  border-radius: 5px;
  background: var(--ui-background);
  box-sizing: content-box;
  margin-bottom: 10px;
  
  img {
    width: 25%;
  }
`;

const ProductImg = styled.img`
  border-radius: 7px;
`;

const Figure = styled.figure`
  display: flex;
`;

const InfoBlock = styled.figcaption`
  overflow: hidden;
  margin-left: 12px;
  padding-top: 3px;
`;

const InfoBlockTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 7px;
`;

const BrandName = styled.h3`
  font-size: 0.8125rem;
  font-weight: 500;
`;

const Title = styled.div`
  width: 100%;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;

const OptionBlock = styled.div`
  font-size: 0.75rem;
  
  & div:first-child {
    margin-bottom: 2px;
  }
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`;

const RemoveButton = styled.button.attrs({type: 'button'})`
  width: 14px;
  height: 14px;
  background: url(https://img.icons8.com/pastel-glyph/2x/cancel.png) center center no-repeat;
  background-size: 14px;
  background-color: var(--border100);
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 10px;
  
  @media only screen and (max-width: 768px) {
    margin-left: 7px;
  }
`;

const CheckboxBlock = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
`;