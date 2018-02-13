import { BranchModel } from "./branch.model";

export class ShopModel {
    shopno: string;
    name: string;
    tel: string;
    shoptype: string;
    foodtype: string;
    address: string;
    owner: string;
    mobile: string;
    email: String;
    branchs:Array<BranchModel>
}