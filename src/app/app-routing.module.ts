import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/web/home/home.module').then((m) => m.HomeModule),
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./modules/web/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'bootcamps',
    loadChildren: () => import('./modules/web/search-boot-camp/search-boot-camp.module').then((m) => m.SearchBootCampModule),
  },
  {
    path:'bootcampReviews',
    loadChildren: () => import('./modules/web/bootcamp-reviews/bootcamp-reviews.module').then((m) => m.BootcampReveiewsModule),
  },
  {
    path:'writeBootcamp',
    loadChildren: () => import('./modules/web/write-bootcamp-review/write-bootcamp-review.module').then((m) => m.WriteBootCampReviewModule),
  },
  {
    path:'bootcampDetail/:slug',
    loadChildren: () => import('./modules/web/bootcamp-detail/bootcamp-detail.module').then((m) => m.BootCampDetailModule),
  },
  {
    path:'manage',
    loadChildren: () => import('./modules/manage/manage.module').then((m) => m.ManageModule),
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
