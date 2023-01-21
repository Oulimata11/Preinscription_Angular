import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultesComponent } from './facultes/facultes.component';
import { DepartementsComponent } from './departements/departements.component';
import { FilieresComponent } from './filieres/filieres.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilieresAdminModule } from './filieres-admin/filieres-admin.module';
import { FacultesAdminModule } from './facultes-admin/facultes-admin.module';
import { DepartementsAdminModule } from './departements-admin/departements-admin.module';
import { CandidatsAdminModule } from './candidats-admin/candidats-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    FacultesComponent,
    DepartementsComponent,
    FilieresComponent,
    NavbarComponent,
    CandidatsComponent,
    UtilisateursComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FilieresAdminModule,
    FacultesAdminModule,
    DepartementsAdminModule,
    CandidatsAdminModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
