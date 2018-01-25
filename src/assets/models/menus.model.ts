import { ProductModel } from "./product.model";

export class HomeModel{
    menus: Array<MenuModel>;
}

export class MenuModel {
    name: string;
    icon:string;
    items:Array<ItemModel>;
}

export class ItemModel{
    type: string;
    product: ProductModel;
}