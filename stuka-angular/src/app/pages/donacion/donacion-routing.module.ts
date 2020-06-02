import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonacionComponent } from './donacion.component';

const routes: Routes = [{ path: '', component: DonacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionRoutingModule { }
