import {Flex} from "@assets/GlobalStyle";
import img from "@assets/img/img.png";
import Calculator from "./Calculator";
import styled from "styled-components";
import Product from "@interface/Product";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@modules/store";
import {removeCart} from "@modules/cartSlice";
import Button from "@components/common/Button";
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

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
            <Checkbox>
                <input type="checkbox" id="icb" onInput={e => {console.log(e)}}/>
                <label htmlFor="icb" />
            </Checkbox>
            <InfoBox>
                <Flex justifyContent={`flex-start`}>
                    <ProductImg src={img} alt="상품 이미지"/>
                    <InfoBlock>
                        <InfoBlockTop>
                            <BrandName>{product?.brandName}</BrandName>
                        {/* TODO: 삭제 버튼 디자인 결정하기 */}
                        </InfoBlockTop>
                        <Title>{product?.title}</Title>
                        <OptionBlock>
                            <div>{`옵션: ${product?.option}`}</div>
                            <div>{`수량: ${product?.count}`}</div>
                        </OptionBlock>
                    </InfoBlock>
                </Flex>
                <Flex mt={8}>
                    <Calculator />
                    <Price>{product?.priceText}</Price>
                </Flex>
            </InfoBox>
        </ProductBoxLayout>
    );
}


const ProductBoxLayout = styled.div`
  padding: 0.75rem;
  border: 1px solid var(--border100);
  border-radius: 5px;
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

const InfoBlock = styled.div`
  overflow: hidden;
  margin-left: 12px;
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
