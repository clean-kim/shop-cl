import Product, {CartData} from "../interface/Product";

export default function Storage() {
    const {localStorage} = window;
    const prefix = 'cl';

    const get = (key: string) => {
        localStorage.getItem(`${prefix+key}`);
    }
    const set = (key: string, value: any) => {
        localStorage.setItem(`${prefix+key}`, value);
    }
    const remove = (key: string) => {
        localStorage.removeItem(`${prefix+key}`);
    }

    // 장바구니 상품 중복 확인
    const cartDoubleCheck = (key: string, productNo: number) => {
        let originData = localStorage.getItem(`${prefix + key}`);
        if(originData) {
            const parseData = JSON.parse(originData) as CartData;
            if(parseData?.itemList?.length > 0) {
                parseData.itemList.forEach((item) => {
                    if(item.no === productNo) return false;
                })
            }
        }
        return true;
    }
    // 장바구니 상품 추가
    const addCartArray = (key: string, value: Product) => {
        let originData = localStorage.getItem(`${prefix + key}`);
        let newData: Product[] = [];
        if(originData) {
            const parseData = JSON.parse(originData) as Product[];

            // 상품 리스트 업데이트
            parseData.forEach((item: Product) => {
                /*if() {
                    newData.push();
                }*/
            });
            // 상품 옵션 정보 업데이트

        } else {

        }
        localStorage.setItem(`${prefix+key}`, JSON.stringify(newData));
    }
    // 장바구니 동일 상품 추가

    // 장바구니 상품 제거


    return {
        get,
        set,
        remove,
        cartDoubleCheck,
        addCartArray
    };
}