import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenesListComponent } from './components/imagenes-list/imagenes-list.component';

const routes: Routes = [{ path: '', component: ImagenesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagenesRoutingModule { }
