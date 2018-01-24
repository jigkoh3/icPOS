export class PaymentSettingModel {
    round: string;
    serviceCharge: ServiceChargeModel;
    vat: VatModel;
}

export class ServiceChargeModel {
    isServiceCharge: boolean;
    percent: number;
    setProductPrice: string;
}

export class VatModel {
    isVat: boolean;
    registerNo: string;
    taxID: string;
}