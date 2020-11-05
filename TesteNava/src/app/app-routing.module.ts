import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './view/list-user/list-user.component';
import { MainComponent } from './view/main/main.component';


const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      // canActivate: [AuthGuard],
      children: [
        {path: 'user', component: ListUserComponent},
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
