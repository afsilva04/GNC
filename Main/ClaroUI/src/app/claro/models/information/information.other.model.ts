export class InformationOther {
    segment: string; //SEGMENTO
    autorizationType: string; //TIPO DE AUTORIZACIÓN
    monthAntiquity: string; //ANTIGÜEDAD MESES
    monthCurrentBilling: string; //FACTURACIÓN ACTUAL MES
    otherNewLines: string; //LÍNEAS NUEVAS
    monthNewLinesTotalBillingValue: string; //VALOR FACTURACIÓN TOTAL NUEVAS LINEAS MES
    monthNewLinesAvgBillingValue: string; //VALOR PROMEDIO FACTURACIÓN NUEVAS LINEAS MES
    riskCustomer: string; //CLIENTE EN RIESGO
    offerCompetence: string; //OFERTA DE LA COMPETANCIA
    offerCompetenceDescr: string; //DESCRIPCIÓN OFERTA DE LA COMPETENCIA
    attachSupportOfferCompetence: string; //ADJUNTA SOPORTE OFERTA COMPETANCIA
    ingressDecreasePlanChange: string; //DISMINUCIÓN DE INGRESO POR CAMBIOS DE PLAN
    discountNewLinesItemsBagValue: string; //VALOR BOLSA Y/O DESCUENTO DE EQUIPOS LÍNEAS NUEVAS
    repositionItemsDiscountBagValue: string; //VALOR BOLSA Ó DESCUENTO DE EQUIPOS REPOSICIONES
    totalProjectIngressPermanency: string; //TOTAL INGRESO PROYECTADO PERMANENCIA

    constructor(model: any = null) {
        if (model) {
            this.segment = model.segment;
            this.autorizationType = model.autorizationType;
            this.monthAntiquity = model.monthAntiquity;
            this.monthCurrentBilling = model.monthCurrentBilling;
            this.otherNewLines = model.otherNewLines;
            this.monthNewLinesTotalBillingValue = model.monthNewLinesTotalBillingValue;
            this.monthNewLinesAvgBillingValue = model.monthNewLinesAvgBillingValue;
            this.riskCustomer = model.riskCustomer;
            this.offerCompetence = model.offerCompetence;
            this.offerCompetenceDescr = model.offerCompetenceDescr;
            this.attachSupportOfferCompetence = model.attachSupportOfferCompetence;
            this.ingressDecreasePlanChange = model.ingressDecreasePlanChange;
            this.discountNewLinesItemsBagValue = model.discountNewLinesItemsBagValue;
            this.totalProjectIngressPermanency = model.totalProjectIngressPermanency;
        }
    }
}