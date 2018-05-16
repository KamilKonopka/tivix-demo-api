import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'dashboard',
    component: AllPostsComponent
  },
  {
    path: 'posts-by-user',
    component: MyPostsComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
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
