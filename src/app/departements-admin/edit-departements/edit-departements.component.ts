import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-departements',
  templateUrl: './edit-departements.component.html',
  styleUrls: ['./edit-departements.component.css']
})
export class EditDepartementsComponent implements OnInit {

  les_departements: {id_departement:number,libelle:string,id_faculte:number,
    id_professeur:number} []=[]
    les_facultes: {id_faculte:number,libelle:string} []=[]
    les_professeurs: {id_professeur:number,nom:string} []=[]
  id:number = 0
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient,
    private router: Router){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_departement"]
    })
  }
  ngOnInit(): void {
    this.Facultes();
    this.Professeurs();
  this.http.get("http://localhost/preinscriptions_online_api/departements_admin/getDepartement.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_departements=reponse;
      console.log(this.les_departements);
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
  Professeurs():void{
    this.http.get("http://localhost/preinscriptions_online_api/professeur.php").
    subscribe((reponse:any)=>
    {
      this.les_professeurs=reponse;
      console.log(this.les_professeurs);
    })
  }

  Modifier():void{
    this.http.post("http://localhost/preinscriptions_online_api/departements_admin/editDepartement.php",this.les_departements[0]).
    subscribe((reponse:any)=>
    {
      console.log(reponse);
      this.router.navigate(['/liste_departement'])
    })
  }
}
