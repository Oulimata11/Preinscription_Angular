import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultesAdminRoutingModule } from './facultes-admin-routing.module';
import { ListeFacultesComponent } from './liste-facultes/liste-facultes.component';
import { AddFaculteComponent } from './add-faculte/add-faculte.component';
import { EditFaculteComponent } from './edit-faculte/edit-faculte.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeFacultesComponent,
    AddFaculteComponent,
    EditFaculteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FacultesAdminRoutingModule
  ]
})
export class FacultesAdminModule { }
