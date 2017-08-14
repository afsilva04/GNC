export class UserHealthHistory {
    personalCancer: string;
    personalDiabetes: string;
    personalHeartDiseases: string;
    personalObesity: string;
    personalHypertension: string;
    personalDyslipidemias: string;
    personalPsychiatric: string;
    personalGastrointestinal: string;
    personalOthercheck: boolean;
    personalOther: string;

    familyCancer: string;
    familyDiabetes: string;
    familyHeartDiseases: string;
    familyObesity: string;
    familyHypertension: string;
    familyDyslipidemias: string;
    familyPsychiatric: string;
    familyGastrointestinal: string;
    familyOthercheck: boolean;
    familyOther: string;


    constructor(model: any = null) {
        if (model) {
            this.personalCancer = model.personalCancer;
            this.personalDiabetes = model.personalDiabetes;
            this.personalHeartDiseases = model.personalHeartDiseases;
            this.personalObesity = model.personalObesity;
            this.personalHypertension = model.personalHypertension;
            this.personalDyslipidemias = model.personalDyslipidemias;
            this.personalPsychiatric = model.personalPsychiatric;
            this.personalGastrointestinal = model.personalGastrointestinal;
            this.personalOthercheck = model.personalOthercheck;
            this.personalOther = model.personalOther;

            this.familyCancer = model.familyCancer;
            this.familyDiabetes = model.familyDiabetes;
            this.familyHeartDiseases = model.familyHeartDiseases;
            this.familyObesity = model.familyObesity;
            this.familyHypertension = model.familyHypertension;
            this.familyDyslipidemias = model.familyDyslipidemias;
            this.familyPsychiatric = model.familyPsychiatric;
            this.familyGastrointestinal = model.familyGastrointestinal;
            this.familyOthercheck = model.familyOthercheck;
            this.familyOther = model.familyOther;
        }
    }
}