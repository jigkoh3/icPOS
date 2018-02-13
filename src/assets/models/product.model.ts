export class ProductModel {
    _id: string;
    name: string;
    image: string;
    bgcoler: string;
    category: CategoryModel;
    prices: Array<PriceModel>;
    submenus: Array<SubmenuModel>
    description: string;
}

export class DiscountModel {
    name: string;
    _type: string; // "DISC" or "ITMDISC"
    ratetype: string; //"PERC" or "FIX"
    percent: number;
    fixamount: number;
}

export class CategoryModel {
    name: string;
}

export class PriceModel {
    name: string;
    _type: string;
    price: number;
    isChecked: boolean; // Submenu Type 'any' Only
    selectedQty: number; // Submenu Type 'qty' Only
}
export class SubmenuModel {
    name: string;
    prices: Array<PriceModel>;
    _type: string; // "one" , "any", "qty"
    bom: BomModel;
}

export class BomModel {
    name: string;
}