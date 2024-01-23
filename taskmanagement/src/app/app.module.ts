import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    ProjectComponent,
    TaskComponent,
    ChartsComponent,
    ViewtaskComponent,
    AclSettingsComponent
  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
 
      RouterModule.forRoot([
      
        { path: 'home', component: HomeComponent },
      ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
