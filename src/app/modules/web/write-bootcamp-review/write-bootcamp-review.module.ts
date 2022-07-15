import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { WriteBootcampReviewComponent } from './write-bootcamp-review.component';
import { WriteBootCampReviewRoutingModule } from './write-bootcamp-routing.module';


@NgModule({
  declarations: [
   WriteBootcampReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WriteBootCampReviewRoutingModule
  ]
})
export class WriteBootCampReviewModule { }
