import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-nav',
  templateUrl: 'template.html',
  styleUrls: ['style.css']
})
export class NavComponent implements OnInit {
  currentSectionTag = "Arquitectura Emocional";
  constructor() { }

  ngOnInit() {
  }

}
