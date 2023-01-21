import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit{

  un_candidat:{nom:string,prenom:string,date_naissance:Date,lieu_naissance:string,sexe:string,
  telephone:number,email:string,niveau_scolaire:string,id_faculte:number,
  id_departement:number}={
    nom:"",prenom:"",date_naissance:new Date(1000,0,0),lieu_naissance:"",sexe:"",telephone: 0 ,
    email:"",niveau_scolaire:"",id_faculte:0,id_departement:0
  }

  les_facultes: {id_faculte:number,libelle:string} []=[]
  les_departements: {id_departement:number,libelle:string} []=[]
  
  constructor(private http:HttpClient,private router: Router){}
  
  ngOnInit(): void {
   this.Facultes();
   this.Departements();

  }

  Facultes():void{
    this.http.get("http://localhost/preinscriptions_online_api/index.php").
    subscribe((reponse:any)=>
    {
      this.les_facultes=reponse;
      console.log(reponse);
    })
  }

  Departements():void{
    this.http.get("http://localhost/preinscriptions_online_api/departements_admin/listeDepartement.php").
    subscribe((reponse:any)=>
    {
      this.les_departements=reponse;
      console.log(this.les_departements);
    })
  }

  Ajouter():void{
    this.http.post("http://localhost/preinscriptions_online_api/addCandidat.php",this.un_candidat).
    subscribe((reponse:any)=>
    {
      this.un_candidat=reponse;
      console.log(this.un_candidat);
      this.router.navigate(['/facultes'])
    })
  }
}
