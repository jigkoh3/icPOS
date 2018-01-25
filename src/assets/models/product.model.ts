export class ProductModel {
    name: String;
    image: String;
    bgcoler: String;
    category: CategoryModel;
    prices: Array<PriceModel>;
    submenus: Array<SubmenuModel>
    description: String;
}

export class CategoryModel {
    name: String;
}

export class PriceModel {
    name: String;
    type: String;
    price: Number;
    isChecked: Boolean; // Submenu Type 'any' Only
    selectedQty: Number; // Submenu Type 'qty' Only
}
export class SubmenuModel {
    name: String;
    prices: Array<PriceModel>;
    type: String; // "one" , "any", "qty"
    bom: BomModel;
}

export class BomModel{
    name: String;
}