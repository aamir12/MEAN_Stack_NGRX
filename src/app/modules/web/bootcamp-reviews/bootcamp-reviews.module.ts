import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampReveiewsComponent } from './bootcamp-reviews.component';
import { BootcampReveiewsRoutingModule } from './bootcamp-reviews-routing.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { CommonComponentsModule } from 'src/app/core/modules/common/common-components.module';

@NgModule({
  declarations: [
   BootcampReveiewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonComponentsModule,
    BootcampReveiewsRoutingModule
  ]
})
export class BootcampReveiewsModule { }
