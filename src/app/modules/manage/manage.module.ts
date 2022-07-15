import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { AccountComponent } from './components/account/account.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BootcampComponent } from './components/bootcamp/bootcamp.component';
import { AddBootcampComponent } from './components/add-bootcamp/add-bootcamp.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';


@NgModule({
  declarations: [
    AccountComponent,
    ReviewsComponent,
    BootcampComponent,
    AddBootcampComponent,
    CoursesComponent,
    AddCourseComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
