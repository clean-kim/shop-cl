export default function Storage() {
    const {localStorage} = window;
    const prefix = 'cl';

    const get = (key: string) => {
        return localStorage.getItem(`${prefix+key}`);
    }
    const set = (key: string, value: any) => {
        localStorage.setItem(`${prefix+key}`, value);
    }
    const remove = (key: string) => {
        localStorage.removeItem(`${prefix+key}`);
    }

    // 장바구니 상품 중복 확인
   /* const cartDoubleCheck = (key: string, productNo: number) => {
        const originData = localStorage.getItem(`${prefix + key}`);
        if(originData) {
            const parseData = JSON.parse(originData) as CartData;
            if(parseData?.itemList?.length > 0) {
                parseData.itemList.forEach((item) => {
                    if(item.no === productNo) return false;
                })
            }
        }
        return true;
    }*/
    // 장바구니 상품 제거


    return {
        get,
        set,
        remove,
        // cartDoubleCheck
    };
}