import { Component, OnInit } from '@angular/core';
import { AvailableSystem } from 'Model/Data';

@Component({
  selector: 'app-system-allocation',
  templateUrl: './system-allocation.component.html',
  styleUrls: ['./system-allocation.component.css']
})

export class SystemAllocationComponent implements OnInit {

  TitleStyle:string="text-color size style"

  AvailableSystems:AvailableSystem[]=[
    {EmployeeName:"Seher",EmployeeStatus:"Active",EmployeeRequest:"Approved",SystemName:"Lenovo",SystemModel:"T5890"},
    {EmployeeName:"Saba",EmployeeStatus:"Active",EmployeeRequest:"Yet-to-apply",SystemName:"Lenovo",SystemModel:"4T890"},
    {EmployeeName:"SS",EmployeeStatus:"Resigned",EmployeeRequest:"Rejected",SystemName:"Null",SystemModel:"Null"}
  ]

  // EmployeeName:string;
  // EmployeeStatus:string;
  // EmployeeRequest:string;
  // SystemName:string;
  // SystemModel:string;

  constructor() { }

  ngOnInit(): void {
  }

}
