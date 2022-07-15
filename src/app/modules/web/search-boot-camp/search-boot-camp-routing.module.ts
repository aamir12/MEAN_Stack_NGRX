import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBootCampComponent } from './search-boot-camp.component';

const routes: Routes = [
  {
    path:'',
    component:SearchBootCampComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchBootCampRoutingModule { }
