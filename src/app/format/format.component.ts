import { Component, OnInit } from '@angular/core';
import {FormatServiceService} from "./../format-service.service";

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.scss']
})
export class FormatComponent implements OnInit {
  desc: any="tx";
  formatService : FormatServiceService;
  constructor(formatService : FormatServiceService) { 
    this.formatService = formatService;
    this.desc = "txx";
  }

  ngOnInit(): void {
    this.desc = "trolly";
    this.desc= 32;

  }

  showFormats(){
    this.formatService.getFormats().subscribe((format)=>{
      console.log(format);
    });
  }

  save(){
    this.formatService.saveFormats(this.desc).subscribe((response)=>{
      console.log("Data Saved");
    });
  }
 
}
