import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TarjetaComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    TarjetaComponent
  ]
})
export class TarjetaModule { }
