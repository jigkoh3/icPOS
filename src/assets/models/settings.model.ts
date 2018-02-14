export class SettingsModel {
    payment: PaymentModel;
    serviceCharge: ServiceChargeModel;
    round: string;
    openbill: OpenbillModel;
}

export class PaymentModel {
    vat: VatModel;
}

export class VatModel {
    isVat: boolean;
    taxID: string;
    registerNo: string;
}

export class ServiceChargeModel {
    isServiceCharge: boolean;
    percent: number;
    setProductPrice: string;
}

export class OpenbillModel {
    isOpenbill: boolean;
    tableQty: number;
    limitTime: number;
    setNotification: boolean;
    setTable: boolean;
}