export class ProductDevice {
    rotation: string; //ROTACIÓN EQUIPO
    reference: string; // REFERENCIA DE EQUIPO
    source: string; // ORIGEN EQUIPO
    discountRate: number; // PORCENTAJE DESCUENTO
    sugPriceNoIva: number; // PRECIO SUGERIDO SIN IVA
    reqPriceNoIva: number; //PRECIO SOLICITADO SIN IVA
    fullPriceNoIva: number; // FULL PRECIO SIN IVA

    constructor(model: any = null) {
        if (model) {
            this.rotation = model.rotation;
            this.reference = model.reference;
            this.source = model.source;
            this.discountRate = model.discountRate;
            this.sugPriceNoIva = model.sugPriceNoIva;
            this.reqPriceNoIva = model.reqPriceNoIva;
            this.fullPriceNoIva = model.fullPriceNoIva;
        }
    }
}