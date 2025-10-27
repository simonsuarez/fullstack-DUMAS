import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosListComponent } from './components/gatos-list/gatos-list.component';
import { GatosFormComponent } from './components/gatos-form/gatos-form.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    GatosRoutingModule,
    GatosListComponent,
    GatosFormComponent
  ]
})
export class GatosModule { }
