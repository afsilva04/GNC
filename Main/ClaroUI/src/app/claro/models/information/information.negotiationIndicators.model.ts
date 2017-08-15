export class InformationNegotiationIndicators {
    niMarginEbitda: string; //MARGEN EBITDA
    niOthers: string; //OTROS
    niFinancialROI: string; //ROI FINANCIERO
    niQuantityCfmPlans: string; //CANTIDAD DE CFM PLANES
    niQuantityCfmPackages: string; //CANTIDAD DE CFM PAQUETES
    niPermanence: string; //PERMANENCIA PACTADA
    niAverageStayPending: string; //PROMEDIO PERMANENCIA PENDIENTE
    niValueDiscountEquipamentBag: string; //VALOR DESCUENTO EN EQUIPOS Y BOLSAS
    niValueDiscountCfmPlans: string; //VALOR DESCUENTO CFM PLANES
    niValueDiscountCfmPackages: string; //VALOR DESCUENTO CFM PAQUETES
    niTotalDiscountValue: string; //VALOR TOTAL DESCUENTOS
    niOtherDiscounts: string; //OTROS DESCUENTOS

    constructor(model:any = null){
        if(model){
            this.niMarginEbitda = model.niMarginEbitda;
            this.niOthers = model.niOthers;
            this.niFinancialROI = model.niFinancialROI;
            this.niQuantityCfmPlans = model.niQuantityCfmPlans;
            this.niQuantityCfmPackages = model.niQuantityCfmPackages;
            this.niPermanence = model.niPermanence;
            this.niAverageStayPending = model.niAverageStayPending;
            this.niValueDiscountEquipamentBag = model.niValueDiscountEquipamentBag;
            this.niValueDiscountCfmPlans = model.niValueDiscountCfmPlans;
            this.niValueDiscountCfmPackages = model.niValueDiscountCfmPackages;
            this.niTotalDiscountValue = model.niTotalDiscountValue;
            this.niOtherDiscounts = model.niOtherDiscounts;
        }
    }
}