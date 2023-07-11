import styled from 'styled-components';
import CheckboxRound from '@components/common/CheckboxRound';
import {Flex} from '@assets/GlobalStyle';
import Calculator from '@components/cart/Calculator';
import {useEffect, useState} from 'react';
import Product from '@interface/Product';
import {useAppDispatch} from '@modules/store';
import {removeCart} from '@modules/cartSlice';
import Button, {ButtonStyleGuide} from '@components/common/Button';

export default function ProductBoxPC(props: Product) {
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct({...props});
    }, [props]);

    const dispatch = useAppDispatch();
    const onRemoveButtonHandler = (no: number) => {
        dispatch(removeCart(no));
    }

    return (
        <tr>
            <td><CheckboxRound /></td>
            <td>
                <Figure>
                    <ProductImg src={product?.img} alt="상품 이미지"/>
                    <InfoBlock>
                        <BrandName>{product?.brandName}</BrandName>
                        <Title>{product?.title}</Title>
                        <OptionBlock>
                            <div>{`옵션: ${product?.option === '' ? '옵션없음' : ''}`}</div>
                            <div>{`수량: ${product?.count}`}</div>
                        </OptionBlock>
                    </InfoBlock>
                </Figure>
            </td>
            <td>
                <Center>
                    <Calculator initialCount={product?.count ?? 1} />
                </Center>
            </td>
            <td>
                {`${product?.priceText}원`}
            </td>
            <td>
                <ButtonBox>
                    <Button setStyle={{...ButtonStyleGuide.basic01, width: '100px', height: '50px'}}>구매하기</Button>
                    <Button onClickHandler={e => onRemoveButtonHandler(product?.no as number)} setStyle={{width: '100px', height: '50px'}}>삭제하기</Button>
                </ButtonBox>
            </td>
        </tr>
    );
}

const ProductImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 7px;
`;

const Figure = styled.figure`
  display: flex;
`;

const InfoBlock = styled.figcaption`
  overflow: hidden;
  margin-left: 12px;
  padding-top: 3px;
  text-align: start;
`;

const BrandName = styled.h3`
  font-weight: 500;
  margin-bottom: 13px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 0.9375rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 12px;
`;

const OptionBlock = styled.div`
  font-size: 0.875rem;
  
  & div:first-child {
    margin-bottom: 8px;
  }
`;

const Center = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  button:first-child {
    margin-bottom: 5px;
  }
`;