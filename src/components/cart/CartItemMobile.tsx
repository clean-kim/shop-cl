import styled from 'styled-components';
import Product from '@interface/Product';
import {useEffect, useState} from 'react';
import RemoveButton from '@components/common/RemoveButton';
import {useAppDispatch} from '@modules/store';
import {removeCart} from '@modules/cartSlice';

export default function CartItemMobile(props: Product) {
    const [cartItem, setCartItem] = useState<Product>();
    useEffect(() => {
        setCartItem({...props});
    }, [props]);

    const dispatch = useAppDispatch();
    const onRemoveButtonHandler = (no: number) => {
        dispatch(removeCart(no));
    }

    return (
        <>
            {
                cartItem &&
                <CartItemLayout>
                    <div>{cartItem.brandName}</div>
                    <RemoveButton onClickHandler={e => onRemoveButtonHandler(cartItem.no)}/>
                </CartItemLayout>
            }
        </>
        );
}

const CartItemLayout = styled.div`
  border: 1px solid var(--border100);
  margin-bottom: 10px;
`;