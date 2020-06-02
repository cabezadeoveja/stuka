import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '', component: PagesComponent,
    children: [
      { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
      { path: 'adoptar', loadChildren: () => import('./adopta/adopta.module').then(m => m.AdoptaModule) },
      { path: 'apadrinar', loadChildren: () => import('./apadrinar/apadrinar.module').then(m => m.ApadrinarModule) },
      { path: 'quienes-somos', loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) },
      { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
      { path: 'galeria', loadChildren: () => import('./galeria/galeria.module').then(m => m.GaleriaModule) },
      { path: 'donacion', loadChildren: () => import('./donacion/donacion.module').then(m => m.DonacionModule) },
      { path: '**', redirectTo: 'inicio'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
