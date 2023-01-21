import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsAdminRoutingModule } from './departements-admin-routing.module';
import { ListeDepartementsComponent } from './liste-departements/liste-departements.component';
import { AddDepartementsComponent } from './add-departements/add-departements.component';
import { EditDepartementsComponent } from './edit-departements/edit-departements.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeDepartementsComponent,
    AddDepartementsComponent,
    EditDepartementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DepartementsAdminRoutingModule
  ]
})
export class DepartementsAdminModule { }
