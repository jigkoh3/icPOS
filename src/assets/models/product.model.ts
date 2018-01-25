export class ProductModel {
    name: string;
    image: string;
    bgcoler: string;
    category: CategoryModel;
    prices: Array<PriceModel>;
    submenus: Array<SubmenuModel>
    description: string;
}

export class CategoryModel {
    name: string;
}

export class PriceModel {
    name: string;
    type: string;
    price: number;
    isChecked: boolean; // Submenu Type 'any' Only
    selectedQty: number; // Submenu Type 'qty' Only
}
export class SubmenuModel {
    name: string;
    prices: Array<PriceModel>;
    type: string; // "one" , "any", "qty"
    bom: BomModel;
}

export class BomModel{
    name: string;
}