import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampDetailComponent } from './bootcamp-detail.component';
import { BootCampDetailRoutingModule } from './bootcamp-detail-routing.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { CommonComponentsModule } from 'src/app/core/modules/common/common-components.module';
@NgModule({
  declarations: [
    BootcampDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonComponentsModule,
    BootCampDetailRoutingModule
  ]
})
export class BootCampDetailModule { }
