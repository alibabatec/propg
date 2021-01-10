import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component(
    {
        selector: "home-bar",
        templateUrl:"./home.component.html"
    }
)
export class PropHomeComponent{
    public router:Router;
    constructor(router:Router){
        this.router = router;
    }

    addProperty(){
        this.router.navigate(["/property/add"]);
    }

    searchProperty(){
        this.router.navigate(["/property"]);
    }

}