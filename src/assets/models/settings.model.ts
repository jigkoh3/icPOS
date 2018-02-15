export class SettingsModel {
    payment: PaymentModel;
    serviceCharge: ServiceChargeModel;
    round: string;
    openbill: OpenbillModel;
    cashierPrinter: CashierPrinterModel;
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

export class CashierPrinterModel {
    type: string;
    printerMode: string;
    ipAddress: string;
    port: number;
    isOnBluetooth: boolean;
}

