import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonComponentsModule } from 'src/app/core/modules/common/common-components.module';
@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor(){
    console.log("Home Module");
  }
 }
