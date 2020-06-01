import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApadrinarComponent } from './apadrinar.component';

const routes: Routes = [{ path: '', component: ApadrinarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApadrinarRoutingModule { }
