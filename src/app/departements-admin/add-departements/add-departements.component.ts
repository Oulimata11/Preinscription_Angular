import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departements',
  templateUrl: './add-departements.component.html',
  styleUrls: ['./add-departements.component.css']
})
export class AddDepartementsComponent implements OnInit {

  constructor(private http:HttpClient){}
  un_departement:{libelle:string,id_faculte:number,id_professeur:number}=
    {libelle:"",id_faculte:0,id_professeur:0}

  les_facultes: {id_faculte:number,libelle:string} []=[]
  les_professeurs: {id_professeur:number,nom:string} []=[]

  ngOnInit(): void {
    this.Facultes();
    this.Professeurs();
  }

  Facultes():void{
    this.http.get("http://localhost/preinscriptions_online_api/index.php").
    subscribe((reponse:any)=>
    {
      this.les_facultes=reponse;
      console.log(reponse);
    })
  }
  Professeurs():void{
    this.http.get("http://localhost/preinscriptions_online_api/professeur.php").
    subscribe((reponse:any)=>
    {
      this.les_professeurs=reponse;
      console.log(this.les_professeurs);
    })
  }

  Ajouter():void{
    this.http.post("http://localhost/preinscriptions_online_api/departements_admin/addDepartement.php",this.un_departement).
    subscribe((reponse:any)=>
    {
      this.un_departement=reponse;
      console.log(this.un_departement);
    })
  }
}
