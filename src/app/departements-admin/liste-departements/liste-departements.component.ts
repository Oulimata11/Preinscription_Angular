import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-departements',
  templateUrl: './liste-departements.component.html',
  styleUrls: ['./liste-departements.component.css']
})
export class ListeDepartementsComponent implements OnInit {

  les_departements: {id_departement:number,libelle:string,id_faculte:number,
    id_professeur:number} []=[]

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/departements_admin/listeDepartement.php").
    subscribe((reponse:any)=>
    {
      this.les_departements=reponse;
      console.log(reponse);
    })
  }

}
