import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { LoginactivityComponent } from './loginactivity/loginactivity.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ChartsComponent } from './charts/charts.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { AclSettingsComponent } from './acl-settings/acl-settings.component';
import { AuditComponent } from './Team c/audit/audit.component';
import { DocumentComponent } from './Team c/document/document.component';
import { TeamsComponent } from './Team c/teams/teams.component';
import { TimetrackerComponent } from './Team c/timetracker/timetracker.component';
import { BoardsComponent } from './Team c/boards/boards.component';
import { ImageuploadComponent } from './Team c/imageupload/imageupload.component';
import { NotificationComponent } from './Team c/notification/notification.component';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    ProjectComponent,
    TaskComponent,
    ChartsComponent,
    ViewtaskComponent,
    AclSettingsComponent,
    LoginactivityComponent,
    AuditComponent,
    DocumentComponent,
    TeamsComponent,
    TimetrackerComponent,
    BoardsComponent,
    ImageuploadComponent,
    NotificationComponent,
    CommentComponent

  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
      RouterModule.forRoot([
      
        { path: 'home', component: HomeComponent },
      ]),
      
    CommonModule


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
