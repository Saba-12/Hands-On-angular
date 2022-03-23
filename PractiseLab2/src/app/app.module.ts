import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemAllocationComponent } from './system-allocation/system-allocation.component';
import { MenuComponent } from './menu/menu.component';
import { AvailableSystemsComponent } from './available-systems/available-systems.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemAllocationComponent,
    MenuComponent,
    AvailableSystemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
