import { Component, OnInit } from '@angular/core';
import { System } from 'Model/Data';

@Component({
  selector: 'app-available-systems',
  templateUrl: './available-systems.component.html',
  styleUrls: ['./available-systems.component.css']
})

export class AvailableSystemsComponent implements OnInit {

  Systems:System[]=[
    {SystemName:"Lenovo",SystemModel:"T56789"},
    {SystemName:"HP",SystemModel:"T5673454"},
    {SystemName:"Dell",SystemModel:"HG89"},
    {SystemName:"Mac",SystemModel:"MAC789"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
