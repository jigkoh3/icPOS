export class SettingsModel {
    payment: PaymentModel;
    serviceCharge: ServiceChargeModel;
    round: string;
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