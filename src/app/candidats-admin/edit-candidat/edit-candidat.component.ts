import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {

  les_candidats:{nom:string,prenom:string,date_naissance:Date,lieu_naissance:string,sexe:string,
    telephone:number,email:string,niveau_scolaire:string,id_faculte:number,
    id_departement:number} []=[]
  
    les_facultes: {id_faculte:number,libelle:string} []=[]
    les_departements: {id_departement:number,libelle:string} []=[]

    id:number = 0
    constructor(private route_actuelle: ActivatedRoute,private http:HttpClient,
      private router: Router){
      route_actuelle.params.subscribe((params:any)=>{
        this.id=params["id_candidat"]
      })
    }
  ngOnInit(): void {
    this.Departements();
    this.Facultes();

    this.http.get("http://localhost/preinscriptions_online_api/getCandidat.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_candidats=reponse;
      console.log(this.les_candidats);
    })
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
  Modifier():void{
    this.http.post("http://localhost/preinscriptions_online_api/editCandidat.php",this.les_candidats[0]).
    subscribe((reponse:any)=>
    {
      console.log(reponse);
      this.router.navigate(['/liste_candidats'])
    })
  }

}
