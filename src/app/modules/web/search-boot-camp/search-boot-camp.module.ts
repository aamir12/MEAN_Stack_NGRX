import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { SearchBootCampComponent } from './search-boot-camp.component';
import { SearchBootCampRoutingModule } from './search-boot-camp-routing.module';


@NgModule({
  declarations: [
    SearchBootCampComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchBootCampRoutingModule
  ]
})
export class SearchBootCampModule { }
