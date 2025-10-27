import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'imagenes', 
    loadChildren: () => import('./modules/imagenes/imagenes.module').then(m => m.ImagenesModule)
  },
  { 
    path: 'gatos', 
    loadChildren: () => import('./modules/gatos/gatos.module').then(m => m.GatosModule)
  },
  { path: '', redirectTo: '/imagenes', pathMatch: 'full' }
];
