export class ProductPackage {
    name: string; //NOMBRE DEL PAQUETE
    type: string; // TIPO DE  PAQUETE
    CfmNoIva: number; // CFM SIN IVA PAQUETE
    quantityNoCostCfm: number; // NUMERO DE CFM  SIN COSTO PAQUETE

    constructor(model: any = null) {
        if (model) {
            this.name = model.name;
            this.type = model.type;
            this.CfmNoIva = model.CfmNoIva;
            this.quantityNoCostCfm = model.quantityNoCostCfm;
        }
    }
}