import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsAdminRoutingModule } from './candidats-admin-routing.module';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { FormsModule } from '@angular/forms';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { DeleteCandidatComponent } from './delete-candidat/delete-candidat.component';


@NgModule({
  declarations: [
    ListeCandidatsComponent,
    AddCandidatComponent,
    EditCandidatComponent,
    DeleteCandidatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CandidatsAdminRoutingModule
  ]
})
export class CandidatsAdminModule { }
