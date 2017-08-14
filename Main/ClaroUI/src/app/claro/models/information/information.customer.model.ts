export class InformationCustomer {
    idCustomer: string;
    name: string;
    description: string;
    commercialAssignment: string;
    region: string;
    subArea: string;
    currentLines: string;
    valueArpu: string;
    averageArpuLine: string;

    constructor(model: any = null) {
        if (model) {
            this.idCustomer = model.idCustomer;
            this.name = model.name;
            this.description = model.description;
            this.commercialAssignment = model.commercialAssignment;
            this.region = model.region;
            this.subArea = model.subArea;
            this.currentLines = model.currentLines;
            this.valueArpu = model.valueArpu;
            this.averageArpuLine = model.averageArpuLine;
        }
    }
}