export default interface Product {
    no: number;
    title: string;
    price: number;
    priceText?: string;
    likeCnt: number;
    brandName: string;
    discountRate: number;
}

export interface CartData {
    itemList?: Product[];
    productCount?: {
        no: number;
        count: number;
    }
    totalAmount?: number;
}