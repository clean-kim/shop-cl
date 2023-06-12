import {CalculateDiscountRate} from '@utils/util';

export default interface Product {
    no: number;
    title: string;
    price: number;
    priceText?: string;
    likeCnt: number;
    brandName: string;
    discountRate: number;
    discountPriceText?: string;
    option?: string;
    count?: number;
}

export interface ProductList {
    list: Product[];
    totalCount: number;
}

export const GetProductInterface: (data: any) => Product[] = (data: any) => {
    return data.map((item: any) => {
        return {
            no: item.no as number,
            title: item.title  as string,
            price: item.price as number,
            priceText: item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
            likeCnt: item.likeCnt as number,
            brandName: item.brandName as string,
            discountRate: item.discountRate as number,
            discountPriceText: CalculateDiscountRate(item.price, item.discountRate).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        } as Product
    });
}