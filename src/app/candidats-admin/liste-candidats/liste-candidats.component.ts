import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.css']
})
export class ListeCandidatsComponent implements OnInit{

  les_candidats:{id_candidat:number,nom:string,prenom:string,date_naissance:Date,lieu_naissance:string,sexe:string,
    telephone:number,email:string,niveau_scolaire:string,id_faculte:number,
    id_departement:number} []=[]

    constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/listeCandidat.php").
    subscribe((reponse:any)=>
    {
      this.les_candidats=reponse;
      console.log(reponse);
    })
  }

}
