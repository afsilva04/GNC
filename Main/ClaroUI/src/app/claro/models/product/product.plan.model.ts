export class ProductPlan {
    name: string; // NOMBRE DEL PLAN
    type: string; // TIPO DE PLAN
    category: string; // CATEGORÍA DEL PLAN
    CfmNoIva: number; // CFM SIN IVA PLAN
    quantityNoCostCfm: number; // NUMERO DE CFM  SIN COSTO PLAN

    constructor(model: any = null) {
        this.name = model.name;
        this.type = model.type;
        this.category = model.category;
        this.CfmNoIva = model.CfmNoIva;
        this.quantityNoCostCfm = model.quantityNoCostCfm;
    }
}

