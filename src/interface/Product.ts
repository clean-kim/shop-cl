export default interface Product {
    no: number;
    title: string;
    price: number;
    priceText?: string;
    likeCnt: number;
    brandName: string;
    discountRate: number;
    option?: string;
    count?: number;
}