import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptaRoutingModule } from './adopta-routing.module';
import { AdoptaComponent } from './adopta.component';
import { FiltroModule } from '../../components/filtro/filtro.module';
import { TarjetaModule } from '../../components/tarjeta/tarjeta.module';



@NgModule({
  declarations: [
    AdoptaComponent
  ],
  imports: [
    CommonModule,
    AdoptaRoutingModule,
    FiltroModule,
    TarjetaModule
  ]
})
export class AdoptaModule { }
