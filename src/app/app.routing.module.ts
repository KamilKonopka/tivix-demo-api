import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'all-posts',
    component: AllPostsComponent
  },
  {
    path: 'posts-by-user',
    component: MyPostsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
