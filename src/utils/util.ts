export const CalculateDiscountRate = (price: number, discountRate: number) => {
    return price-(price*(discountRate/100));
}