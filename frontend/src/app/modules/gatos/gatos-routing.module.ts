import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosListComponent } from './components/gatos-list/gatos-list.component';
import { GatosFormComponent } from './components/gatos-form/gatos-form.component';

const routes: Routes = [
  { path: '', component: GatosListComponent },
  { path: 'crear', component: GatosFormComponent },
  { path: 'editar/:id', component: GatosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRoutingModule { }
