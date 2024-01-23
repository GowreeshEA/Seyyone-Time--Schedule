import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
<<<<<<< HEAD
import { AclSettingsComponent} from './acl-settings/acl-settings.component';
=======
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
>>>>>>> 06869ef3e0c928188f1a820fa793e205b42e3db4
const routes: Routes = [
  // { path: 'users', component: UsersComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'task', component: TaskComponent },
  // { path: 'teams', component: TeamsComponent },
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'viewtask', component: ViewtaskComponent },
<<<<<<< HEAD
  { path: 'acl-settings', component: AclSettingsComponent },
=======
  { path: 'comment', component: CommentComponent },
>>>>>>> 06869ef3e0c928188f1a820fa793e205b42e3db4
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
