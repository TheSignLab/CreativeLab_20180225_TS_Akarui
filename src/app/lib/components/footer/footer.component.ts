import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
@Component({
  selector: 'ec-footer',
  templateUrl: 'template.html',
  styleUrls: ['style.css']
})
export class FooterComponent implements OnInit {
  thisYear  = moment().year();
  constructor() { }

  ngOnInit() {
  }

}
