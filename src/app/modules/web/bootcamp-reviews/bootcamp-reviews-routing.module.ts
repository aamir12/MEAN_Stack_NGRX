import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampReveiewsComponent } from './bootcamp-reviews.component';

const routes: Routes = [
  {
    path:'',
    component:BootcampReveiewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootcampReveiewsRoutingModule { }
