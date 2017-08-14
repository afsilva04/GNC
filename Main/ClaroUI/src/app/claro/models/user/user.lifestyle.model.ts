export class UserLifestyle {
    physicalActivity: boolean;
    daysPhysicalActivity: string;
    minPhysicalActivity: string;
    seated: string;

    internetUse: string;
    internetUseHours: string;
    videoGame: string;
    videoGameHours: string;
    useCellphone: string;
    useCellphoneHours: string;
    useTv: string;
    useTvHours: string;
    read: string;
    readHours: string;
    timeFamily: string;
    timeFamilyHours: string;
    timeFriends: string;
    timeFriendsHours: string;
    academicActs: string;
    academicActsHours: string;
    otherLeisure: string;
    otherLeisureHours: string;
    sevenHoursDay: string;
    getUpRested: string;
    troubleFallingSleep: string;
    wakeUpAtNight: string;
    feelingBadNight: string;
    sleepDuringDay: string;
    sleepingPills: string;
    constructor(model: any = null) {
        if (model) {
            this.physicalActivity = model.physicalActivity;
            this.daysPhysicalActivity = model.daysPhysicalActivity;
            this.minPhysicalActivity = model.minPhysicalActivity;
            this.seated = model.seated;

            this.internetUse = model.internetUse;
            this.internetUseHours = model.internetUseHours;
            this.videoGame = model.videoGame;
            this.videoGameHours = model.videoGameHours;
            this.useCellphone = model.useCellphone;
            this.useCellphoneHours = model.useCellphoneHours;
            this.useTv = model.useTv;
            this.useTvHours = model.useTvHours;
            this.read = model.read;
            this.readHours = model.readHours;
            this.timeFamily = model.timeFamily;
            this.timeFamilyHours = model.timeFamilyHours;
            this.timeFriends = model.timeFriends;
            this.timeFriendsHours = model.timeFriendsHours;
            this.academicActs = model.academicActs;
            this.academicActsHours = model.academicActsHours;
            this.otherLeisure = model.otherLeisure;
            this.otherLeisureHours = model.otherLeisureHours;
            this.sevenHoursDay = model.sevenHoursDay;
            this.getUpRested = model.getUpRested;
            this.troubleFallingSleep = model.troubleFallingSleep;
            this.wakeUpAtNight = model.wakeUpAtNight;
            this.feelingBadNight = model.feelingBadNight;
            this.sleepDuringDay = model.sleepDuringDay;
            this.sleepingPills = model.sleepingPills;

        }
    }
}