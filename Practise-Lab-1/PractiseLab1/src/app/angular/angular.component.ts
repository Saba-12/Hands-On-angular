import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Model/data';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  template:'title',
  styleUrls: ['./angular.component.css']
})


export class AngularComponent implements OnInit {

  title:string="Angular";

  courses:Course= {name:"Seher",
  topicName:["JS","HTML","C"],
  duration:2,
  startDate:"23/02/2022",
  endDate:"25/04/2022"}




  constructor() { }

  ngOnInit(): void {
  }

}
