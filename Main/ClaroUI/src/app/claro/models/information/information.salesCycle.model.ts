export class InformationSalesCycle {
    status: string; //ESTADO
    
    constructor(model: any = null) {
        if (model) {
            this.status = model.status;
        }
    }
}