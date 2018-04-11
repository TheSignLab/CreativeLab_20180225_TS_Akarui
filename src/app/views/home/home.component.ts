import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

import 'jquery'; // Import jQuery
import 'fullpage.js'; // Import fullpage.js

@Component({
  selector: "ec-home",
 templateUrl: 'template.html',
  styleUrls: ['style.css']
})


export class HomeComponent implements OnInit {
  now = moment().format();
  tomorrow = moment().add(1, "days").format();
  
  constructor() {
    
  }

  ngOnInit() {}


}
