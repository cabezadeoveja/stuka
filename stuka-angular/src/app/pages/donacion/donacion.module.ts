import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionRoutingModule } from './donacion-routing.module';
import { DonacionComponent } from './donacion.component';


@NgModule({
  declarations: [DonacionComponent],
  imports: [
    CommonModule,
    DonacionRoutingModule
  ]
})
export class DonacionModule { }
