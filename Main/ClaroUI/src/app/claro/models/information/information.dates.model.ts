export class InformationDates {
    startDate: string; //FECHA INICIO
    endDate: string; //FECHA FIN
    months: string; //MESES
    
    constructor(model: any = null) {
        if (model) {
            this.startDate = model.startDate;
            this.endDate = model.endDate;
            this.months = model.months;
        }
    }
}