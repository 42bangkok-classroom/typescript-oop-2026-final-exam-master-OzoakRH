export interface Purchase {
    id: number;
    customerName: string;
    purchaseDate: string;
    item: [];
    totalPrice: number;
}

interface PurchaseItem extends Purchase {
    productID: number;
    quantity: number;
    price: number;
}