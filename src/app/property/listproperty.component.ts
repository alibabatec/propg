import {Component, OnInit} from "@angular/core";
import { isNullOrUndefined } from "util";
import { AdvertUnit } from "../models/advertunit";

import {FormatServiceService} from "./../format-service.service";

@Component({
    templateUrl : "./listproperty.component.html"
})
export class ListPropertyComponent implements OnInit {
    formatService:FormatServiceService; 
    advertUnits : AdvertUnit [] = [ new AdvertUnit()];
    constructor(formatService:FormatServiceService){
        this.formatService = formatService;
    }

    ngOnInit(){
        
        if(this.formatService != undefined){
            
            this.formatService.getAdvertUnits().subscribe((response)=>{
                
                this.advertUnits = response["rows"].map(x=>x.value);
            });
        }
    }
}

export class FilterOption {
    key:string;
    value : string;
}