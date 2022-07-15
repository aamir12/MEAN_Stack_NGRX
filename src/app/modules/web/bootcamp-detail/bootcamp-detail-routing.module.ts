import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampDetailComponent } from './bootcamp-detail.component';


const routes: Routes = [
  {
    path:'',
    component:BootcampDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootCampDetailRoutingModule { }
