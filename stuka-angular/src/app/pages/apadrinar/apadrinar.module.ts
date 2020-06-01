import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApadrinarRoutingModule } from './apadrinar-routing.module';
import { ApadrinarComponent } from './apadrinar.component';


@NgModule({
  declarations: [ApadrinarComponent],
  imports: [
    CommonModule,
    ApadrinarRoutingModule
  ]
})
export class ApadrinarModule { }
