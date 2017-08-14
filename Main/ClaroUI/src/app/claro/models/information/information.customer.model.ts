export class InformationCustomer {
    idCustomer: string;//ID CLIENTE/GRUPO EMPRESARIAL
    name: string; //NOMBRE CLIENTE/GRUPO EMPRESARIAL
    description: string; //DESCRIPCIÓN
    commercialAssignment: string; //ASIGNACIÓN COMERCIAL
    region: string; //REGION
    subArea: string; //SUBZONA
    currentLines: string; //LINEAS ACTUALES
    valueArpu: string; //VALOR ARPU
    averageArpuLine: string;//PROMEDIO ARPU POR LINEA

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