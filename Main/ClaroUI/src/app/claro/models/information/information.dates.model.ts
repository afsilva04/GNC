export class InformationDates {
    startDate: string;
    endDate: string;
    months: string;
    
    constructor(model: any = null) {
        if (model) {
            this.startDate = model.startDate;
            this.endDate = model.endDate;
            this.months = model.months;
        }
    }
}