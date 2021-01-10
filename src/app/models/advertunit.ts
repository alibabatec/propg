export class AdvertUnit{
    RentPerMonth : number =0;
    RentalType : string = "";
    AdvertisedBy : string  = "";
    StayDuration : string  = "";
    Region : string  = "";
    District:string  = "";
    Address1 :string  = "";
    PropertyType : string  = "";
    OccupationPreference : string = "";
    GenderPreference : string  = "";
    Features : string [] = [""];
    PropertyTitle : string  = "";
    PropertyDescription : string  = "";
}

export enum RentalTypeEnum {"Whole Unit", "Room"}