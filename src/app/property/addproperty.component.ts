import {Component, OnChanges, SimpleChange} from "@angular/core";
import { AdvertUnit } from "./../models/advertunit";
import {FormatServiceService} from "./../format-service.service";

@Component({
    selector : "addproperty",
    templateUrl : "./addproperty.component.html"
})
export class AddPropertyComponent implements OnChanges
{
    advertUnit : AdvertUnit;
    formatService : FormatServiceService;
    constructor(formatService: FormatServiceService){
        this.formatService = formatService;
        this.advertUnit = new AdvertUnit();
    }
    


    AdvertT:any="";
    rentPerMonth : number=234;
    rentalTypes : Feature    [] = [
        new Feature("Whole Unit"),
        new Feature("Room"),
        ];
    advertiserTypes : string [] = ["Owner", "Agent"];
    stayDurationTypes : string [] = ["Short", "Long Term"];
    regions : string [] = ["Central Singapore", "East Singapore", "North Singapore", "North East Singapore", "West Singapore"];
    districts : string [] = ["A", "B", "C", "D"];
    address1 : string = "";
    propertyTypes : string [] = ["HDB", "Condo", "House"];

    occupationPreferences : string [] = ["For Professionals", "For Students"];
    genderPreferences : string [] = ["For Females", "For Males", "For Couples", "No Couples"];
    features : Feature [] = [
        new Feature("Furnished"),
        new Feature("Internet"),
        new Feature("Air Conditioning"),
        new Feature("Room is shared with others"),
    ];
        
    propTitle : string = "";
    propDescription : string = "";
    images : string [] = [];

    ngOnChanges(args: any){
        let m =30;
    }

    rentalChange(rentalTypeChange:any){
        let m=323;
    }
    addProperty(){
        this.advertUnit.Features = null;
        this.advertUnit.Features = this.features.filter(x=> x.selected).map(x=>x.title);
        this.formatService.saveAdvertUnit(this.advertUnit).subscribe((response)=>{
            console.log("Saved");
        
        });
    }
    
}

export class Feature {
    public title: string;
    public selected : boolean=false;
    constructor(title:string){
        this.title = title;
    }
}