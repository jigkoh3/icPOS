import { ProductModel } from "./product.model";

export class HomeModel{
    menus: Array<MenuModel>;
}

export class MenuModel {
    name: String;
    icon:String;
    items:Array<ItemModel>;
}

export class ItemModel{
    type: String;
    product: ProductModel;
}