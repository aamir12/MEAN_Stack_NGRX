import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { SearchBootCampComponent } from './search-boot-camp.component';
import { SearchBootCampRoutingModule } from './search-boot-camp-routing.module';
import { CommonComponentsModule } from 'src/app/core/modules/common/common-components.module';


@NgModule({
  declarations: [
    SearchBootCampComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonComponentsModule,
    SearchBootCampRoutingModule
  ]
})
export class SearchBootCampModule { }
