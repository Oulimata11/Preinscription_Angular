import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilieresAdminRoutingModule } from './filieres-admin-routing.module';
import { ListeFilieresComponent } from './liste-filieres/liste-filieres.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { EditFiliereComponent } from './edit-filiere/edit-filiere.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeFilieresComponent,
    AddFiliereComponent,
    EditFiliereComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FilieresAdminRoutingModule
  ]
})
export class FilieresAdminModule { }
