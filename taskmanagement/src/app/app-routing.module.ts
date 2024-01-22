import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'users', component: UsersComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'tasks', component: TasksComponent },
  // { path: 'teams', component: TeamsComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
