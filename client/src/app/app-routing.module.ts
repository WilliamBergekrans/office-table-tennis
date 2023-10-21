import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { UserProfileComponent } from './views/user-profile/user-profile.component'
import { HomePageComponent } from './views/home-page/home-page.component'

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'user-profile', component: UserProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
