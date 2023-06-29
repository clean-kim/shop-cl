import CartMobile from "@components/cart/CartMobile";
import {M, PC} from "@components/common/MediaQuery";
import EmptyCart from "@components/cart/EmptyCart";
import {useAppSelector} from "@modules/store";

export default function Cart() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    return (
        <>
            {cartSelector.length > 0 ?
                <>
                    <M elem={<CartMobile />} />
                    <PC elem={<p>cart pc</p>} />
                </>
                :
                <EmptyCart />}
        </>
    );
}
