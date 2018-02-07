import { ProductModel, DiscountModel } from "./product.model";
import { OrderModel, TableModel } from "./order.model";

export class HomeModel {
    menus: Array<MenuModel>;
    products: Array<ProductModel>;
    discounts: Array<DiscountModel>;
    bills: Array<OrderModel>;
    tables: Array<TableModel>;
}

export class MenuModel {
    name: string;
    icon: string;
    items: Array<ItemModel>;
}

export class ItemModel {
    _type: string;
    product: ProductModel;
    discount: DiscountModel;
}