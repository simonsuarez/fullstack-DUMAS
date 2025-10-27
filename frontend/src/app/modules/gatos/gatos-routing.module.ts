import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatosListComponent } from './components/gatos-list/gatos-list.component';

const routes: Routes = [
  { path: '', component: GatosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRoutingModule { }
