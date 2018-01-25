import { ProductModel } from "./product.model";

export class OrderModel {
    docno: string;
    docdate: Date;
    servetype: string; // "cashier : สั่งหน้า cashier (default)", "table : สั่งที่โต๊ะ", "customer : สั่งกลับบ้าน"
    table: TableModel;
    customer: CustomerModel;
    items: Array<OrderItemModel>;
    total: number;
    discount: number;
    vatrate: number;
    vatamount: number;
    netamount: number;
    status: string; // "open", "close", "cancle" 
}

export class OrderItemModel {
    type: string;
    product: ProductModel;
    remark: string;
    qty: number;
    total: number;
}

export class TableModel {
    name: string;
    zone: ZoneModel;
}

export class CustomerModel {
    name: string;
}

export class ZoneModel {
    name: string
}

