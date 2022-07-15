import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddBootcampComponent } from './components/add-bootcamp/add-bootcamp.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { BootcampComponent } from './components/bootcamp/bootcamp.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

const routes: Routes = [
  {
    path:'', //manage
    component:BootcampComponent
  },
  {
    path:'addBootcamp',
    component:AddBootcampComponent
  },
  {
    path:'editBootcamp/:bootcampId',
    component:AddBootcampComponent
  },
  {
    path:'bootcamp/:bootcampId/courses',
    component:CoursesComponent
  },
  {
    path:'bootcamp/:bootcampId/addBootCamp',
    component:AddCourseComponent
  },
  {
    path:'bootcamp/:bootcampId/editBootCamp/:courseId',
    component:AddCourseComponent
  },
  {
    path:'bootcamp/:bootcampId/reviews',
    component:ReviewsComponent
  },
  {
    path:'bootcamp/:bootcampId/editReview/:reviewId',
    component:ReviewsComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'changePassword',
    component:UpdatePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
