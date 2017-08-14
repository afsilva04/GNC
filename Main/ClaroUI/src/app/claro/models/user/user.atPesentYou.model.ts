export class UserAtPesentYou {
    formulatedDrugs: boolean;
    formulatedDrugsName: string;
    formulatedDrugsIngestedDose: string;
    formulatedDrugsFrequency: string;
    formulatedDrugsWhy: string;

    supplements: boolean;
    supplementsName: string;
    supplementsIngestedDose: string;
    supplementsFrequency: string;
    supplementsWhy: string;

    anotherSupplement: boolean;
    anotherSupplementName: string;
    anotherSupplementIngestedDose: string;
    anotherSupplementFrequency: string;
    anotherSupplementWhy: string;

    constructor(model: any = null) {
        if (model) {
            this.formulatedDrugs = model.formulatedDrugs;
            this.formulatedDrugsName = model.formulatedDrugsName;
            this.formulatedDrugsIngestedDose = model.formulatedDrugsIngestedDose;
            this.formulatedDrugsFrequency = model.formulatedDrugsFrequency;
            this.formulatedDrugsWhy = model.formulatedDrugsWhy;

            this.supplements = model.supplements;
            this.supplementsName = model.supplementsName;
            this.supplementsIngestedDose = model.supplementsIngestedDose;
            this.supplementsFrequency = model.supplementsFrequency;
            this.supplementsWhy = model.supplementsWhy;

            this.anotherSupplement = model.anotherSupplement;
            this.anotherSupplementName = model.anotherSupplementName;
            this.anotherSupplementIngestedDose = model.anotherSupplementIngestedDose;
            this.anotherSupplementFrequency = model.anotherSupplementFrequency;
            this.anotherSupplementWhy = model.anotherSupplementWhy;

        }
    }
}
