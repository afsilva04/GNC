export class ProductGeneral {
    saleType: string; // TIPO DE VENTA
    quantityLines: number; // NUMERO DE LÍNEAS
    permanenceClause: number; // CLAUSULA PERMANENCIA

    constructor(model: any = null) {
        if (model) {
            this.quantityLines = model.quantityLines;
            this.permanenceClause = model.permanenceClause;
            this.saleType = model.saleType;
        }
    }
}