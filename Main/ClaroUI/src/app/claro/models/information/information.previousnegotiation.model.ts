
export class InformationPreviousNegotiation {
    marginEbitda: string; //MARGEN EBITDA
    others: string; //OTROS
    financialRIO: string; //ROI FINANCIERO
    quantityCmfPlans: string; //CANTIDAD DE CFM PLANES
    quantityCmfPackages: string; //CANTIDAD DE CFM PAQUETES
    permanence: string; //PERMANENCIA PACTADA
    averageStayPending: string; //PROMEDIO PERMANENCIA PENDIENTE
    valueDiscountEquipamentBag: string; //VALOR DESCUENTO EN EQUIPOS Y BOLSAS
    valueDiscountCmfPlans: string; //VALOR DESCUENTO CFM PLANES
    totalDiscountValue: string; //VALOR TOTAL DESCUENTOS
    valueDiscountPackages: string; //VALOR DESCUENTO CFM PAQUETES
    OthersDiscount: string; //OTROS DESCUENTOS
    newLines: string; //LÍNEAS NUEVAS
    totalIncomePermanence: string; //TOTAL INGRESO PROYECTADO PERMANENCIA

    constructor(model: any = null) {
        if (model) {
            this.marginEbitda = model.marginEbitda;
            this.others = model.others;
            this.financialRIO = model.financialRIO;
            this.quantityCmfPlans = model.quantityCmfPlans;
            this.quantityCmfPackages = model.quantityCmfPackages;
            this.permanence = model.permanence;
            this.averageStayPending = model.averageStayPending;
            this.valueDiscountEquipamentBag = model.valueDiscountEquipamentBag;
            this.valueDiscountCmfPlans = model.valueDiscountCmfPlans;
            this.totalDiscountValue = model.totalDiscountValue;
            this.valueDiscountPackages = model.valueDiscountPackages;
            this.OthersDiscount = model.OthersDiscount;
            this.newLines = model.newLines;
            this.totalIncomePermanence = model.totalIncomePermanence;
        }
    }
}
