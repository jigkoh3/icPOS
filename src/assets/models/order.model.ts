import { ProductModel } from "./product.model";

export class OrderModel {
    docno: String;
    docdate: Date;
    servetype: String; // "cashier : สั่งหน้า cashier (default)", "table : สั่งที่โต๊ะ", "customer : สั่งกลับบ้าน"
    table: TableModel;
    customer: CustomerModel;
    items: Array<OrderItemModel>;
    total: Number;
    discount: Number;
    vatrate: Number;
    vatamount: Number;
    netamount: Number;
    status: String; // "open", "close", "cancle" 
}

export class OrderItemModel {
    type: String;
    product: ProductModel;
    remark: String;
    qty: Number;
    total: Number;
}

export class TableModel {
    name: String;
    zone: ZoneModel;
}

export class CustomerModel {
    name: String;
}

export class ZoneModel {
    name: String
}

