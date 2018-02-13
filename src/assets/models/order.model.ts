import { ProductModel } from "./product.model";

export class OrderModel {
    docno: string;
    opendate: Date;
    paiddate: Date;
    cancledate: Date;
    round: string;
    cancleremark: string;
    servetype: string; // "takeatable : สั่งที่โต๊ะ", "takeaway : สั่งกลับบ้าน"
    table: TableModel;
    customer: CustomerModel;
    items: Array<OrderItemModel>;
    total: number;
    discount: number;
    vatrate: number;
    vatamount: number;
    netamount: number;
    status: string; // "open", "paid", "cancle" 
    branch:string;
}

export class RoundModel {
    name: string; // formate dd-mm-yyyy hh:mm Example: 31-01-2018
    startmoney: number;
}

export class OrderItemModel {
    _type: string;
    product: ProductModel;
    remark: string;
    qty: number;
    total: number;
    status: string;
}

export class TableModel {
    name: string; 
    zone: string;
}

export class CustomerModel {
    name: string;
    note: string;
}

export class ZoneModel {
    name: string
}

