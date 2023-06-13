import Button, {ButtonStyleGuide} from "@components/common/Button";
import {useAppDispatch, useAppSelector} from "@modules/store";
import {useEffect, useState} from "react";
import Product from "@interface/Product";
import {addCart} from "@modules/cartSlice";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function BuyGroup(props: Product) {
    const [product, setProduct] = useState<Product>({...props});
    const dispatch = useAppDispatch();
    const addToCart = () => {
        dispatch(addCart({...product, count: 1, option: ''}));
    }


    useEffect(() => {
        setProduct({...props});
    }, [props]);

    return (
      <BuyGroupLayout>
          <FavoriteButtonLayout>
            <button><FavoriteBorderIcon /></button>
          </FavoriteButtonLayout>
          <ButtonLayout>
              <Button onClickHandler={addToCart} setStyle={{...SetStyle}}>장바구니</Button>
              <PurchaseButton>구매하기</PurchaseButton>
          </ButtonLayout>
      </BuyGroupLayout>
    );
}

const SetStyle = {
    width: '154px',
    height: '47px'
}

const BuyGroupLayout = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  height: 70px;
  bottom: 0;
  background: var(--ui-background);
  border-top: 1px solid var(--border100);
  box-sizing: border-box;
  padding: 10px;
`;

const FavoriteButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const PurchaseButton = styled(Button).attrs({
    setStyle: {
        ...ButtonStyleGuide.basic01,
        ...SetStyle
    }
})`
`;