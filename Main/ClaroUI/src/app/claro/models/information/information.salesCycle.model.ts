export class InformationSalesCycle {
    status: string;
    
    constructor(model: any = null) {
        if (model) {
            this.status = model.status;
        }
    }
}