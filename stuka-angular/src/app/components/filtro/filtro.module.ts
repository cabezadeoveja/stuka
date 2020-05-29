import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [ FiltroComponent ]
})
export class FiltroModule { }
