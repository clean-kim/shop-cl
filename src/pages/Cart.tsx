import CartMobile from "@components/cart/CartMobile";
import {M, PC} from "@components/common/MediaQuery";
import {CartList} from '@server/server';
import EmptyCart from "@components/cart/EmptyCart";

export default function Cart() {

    const datas = CartList();

    return (
        <>
            {datas && datas.length > 0 ?
                <>
                    <M elem={<CartMobile />} />
                    <PC elem={<p>cart pc</p>} />
                </>
                :
                <EmptyCart />}
        </>
    );
}
