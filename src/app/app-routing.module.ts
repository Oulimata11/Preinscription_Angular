import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatComponent } from './candidats-admin/add-candidat/add-candidat.component';
import { DeleteCandidatComponent } from './candidats-admin/delete-candidat/delete-candidat.component';
import { EditCandidatComponent } from './candidats-admin/edit-candidat/edit-candidat.component';
import { ListeCandidatsComponent } from './candidats-admin/liste-candidats/liste-candidats.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDepartementsComponent } from './departements-admin/add-departements/add-departements.component';
import { EditDepartementsComponent } from './departements-admin/edit-departements/edit-departements.component';
import { ListeDepartementsComponent } from './departements-admin/liste-departements/liste-departements.component';
import { DepartementsComponent } from './departements/departements.component';
import { AddFaculteComponent } from './facultes-admin/add-faculte/add-faculte.component';
import { EditFaculteComponent } from './facultes-admin/edit-faculte/edit-faculte.component';
import { ListeFacultesComponent } from './facultes-admin/liste-facultes/liste-facultes.component';
import { FacultesComponent } from './facultes/facultes.component';
import { AddFiliereComponent } from './filieres-admin/add-filiere/add-filiere.component';
import { EditFiliereComponent } from './filieres-admin/edit-filiere/edit-filiere.component';
import { ListeFilieresComponent } from './filieres-admin/liste-filieres/liste-filieres.component';
import { FilieresComponent } from './filieres/filieres.component';
import { LoginComponent } from './login/login.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"login"},
  {path:'facultes',component:FacultesComponent},
  {path:'departements/:id_faculte',component:DepartementsComponent},
  {path:'filieres/:id_departement',component:FilieresComponent},
  {path:'candidats',component:CandidatsComponent},
  {path:'utilisateurs',component:UtilisateursComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
    //filieres admin
  {path:'liste_filieres',component:ListeFilieresComponent},
  {path:'add_filiere',component:AddFiliereComponent},
  {path:'edit_filiere/:id_filiere',component:EditFiliereComponent},
    //facultes admin
  {path:'liste_facultes',component:ListeFacultesComponent},
  {path:'add_faculte',component:AddFaculteComponent },
  {path:'edit_faculte/:id_faculte',component:EditFaculteComponent},
    //departements admin
  {path:'liste_departement',component:ListeDepartementsComponent},
  {path:'add_departement',component:AddDepartementsComponent},
  {path:'edit_departement/:id_departement',component:EditDepartementsComponent },
    //candidats admin
  {path:'liste_candidats',component:ListeCandidatsComponent},
  {path:'add_candidat',component:AddCandidatComponent },
  {path:'edit_candidat/:id_candidat',component:EditCandidatComponent },
  {path:'delete_candidat/:id_candidat',component: DeleteCandidatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
