import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenesRoutingModule } from './imagenes-routing.module';
import { ImagenesListComponent } from './components/imagenes-list/imagenes-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesRoutingModule,
    ImagenesListComponent
  ]
})
export class ImagenesModule { }
