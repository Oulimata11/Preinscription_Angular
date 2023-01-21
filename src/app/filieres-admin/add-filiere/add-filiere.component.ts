import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {
  les_filieres:{id_filiere:number,nom:string,id_departement:number}= {id_filiere:0,
  nom:"",id_departement:0}
  constructor(private http:HttpClient,private router: Router){}
  les_departements:{id_departement:number,libelle:string} []=[]


  ngOnInit(): void {
    this.Departements();
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
    this.http.post("http://localhost/preinscriptions_online_api/filieres_admin/addFiliere.php",this.les_filieres).
    subscribe((reponse:any)=>
    {
      this.les_filieres=reponse;
      console.log(this.les_filieres);
    })
  }
}
