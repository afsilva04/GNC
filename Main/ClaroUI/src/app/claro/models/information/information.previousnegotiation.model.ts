
export class InformationPreviousNegotiation {
    pnMarginEbitda: string; //MARGEN EBITDA
    pnOthers: string; //OTROS
    pnFinancialROI: string; //ROI FINANCIERO
    pnQuantityCfmPlans: string; //CANTIDAD DE CFM PLANES
    pnQuantityCfmPackages: string; //CANTIDAD DE CFM PAQUETES
    pnPermanence: string; //PERMANENCIA PACTADA
    pnAverageStayPending: string; //PROMEDIO PERMANENCIA PENDIENTE
    pnValueDiscountEquipamentBag: string; //VALOR DESCUENTO EN EQUIPOS Y BOLSAS
    pnValueDiscountCfmPlans: string; //VALOR DESCUENTO CFM PLANES
    pnTotalDiscountValue: string; //VALOR TOTAL DESCUENTOS
    pnValueDiscountPackages: string; //VALOR DESCUENTO CFM PAQUETES
    pnOthersDiscount: string; //OTROS DESCUENTOS
    pnNewLines: string; //LÍNEAS NUEVAS
    pnTotalIncomePermanence: string; //TOTAL INGRESO PROYECTADO PERMANENCIA

    constructor(model: any = null) {
        if (model) {
            this.pnMarginEbitda = model.pnMarginEbitda;
            this.pnOthers = model.pnOthers;
            this.pnFinancialROI = model.pnFinancialROI;
            this.pnQuantityCfmPlans = model.pnQuantityCfmPlans;
            this.pnQuantityCfmPackages = model.pnQuantityCfmPackages;
            this.pnPermanence = model.pnPermanence;
            this.pnAverageStayPending = model.pnAverageStayPending;
            this.pnValueDiscountEquipamentBag = model.pnValueDiscountEquipamentBag;
            this.pnValueDiscountCfmPlans = model.pnValueDiscountCfmPlans;
            this.pnTotalDiscountValue = model.pnTotalDiscountValue;
            this.pnValueDiscountPackages = model.pnValueDiscountPackages;
            this.pnOthersDiscount = model.pnOthersDiscount;
            this.pnNewLines = model.pnNewLines;
            this.pnTotalIncomePermanence = model.pnTotalIncomePermanence;
        }
    }
}
