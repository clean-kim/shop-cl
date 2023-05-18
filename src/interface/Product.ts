export default interface Product {
    no: number;
    title: string;
    price: number;
    priceText?: string;
    likeCnt: number;
    brandName: string;
    discountRate: number;
    option?: ProductOption[];
}

export interface ProductOption {
    no: number;
    count: number;
}

export interface CartData {
    itemList: Product[];
    optionList: ProductOption[];
    totalAmount?: number;
}