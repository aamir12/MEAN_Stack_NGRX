import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteBootcampReviewComponent } from './write-bootcamp-review.component';

const routes: Routes = [
  {
    path:'',
    component:WriteBootcampReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteBootCampReviewRoutingModule { }
