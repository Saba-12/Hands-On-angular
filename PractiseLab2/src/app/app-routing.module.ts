import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableSystemsComponent } from './available-systems/available-systems.component';
import { SystemAllocationComponent } from './system-allocation/system-allocation.component';

const routes: Routes = [
  {path:"availableSystem",component:AvailableSystemsComponent},
  {path:"systemAllocation",component:SystemAllocationComponent},
  // {path:'',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
