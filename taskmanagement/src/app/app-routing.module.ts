import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  // { path: 'users', component: UsersComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'task', component: TaskComponent },
  // { path: 'teams', component: TeamsComponent },
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
