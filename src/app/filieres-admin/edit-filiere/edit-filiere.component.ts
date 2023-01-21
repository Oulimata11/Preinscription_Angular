import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css']
})
export class EditFiliereComponent implements OnInit {

  les_filieres:{id_filiere:number,nom:string,id_departement:number} []=[]
  les_departements:{id_departement:number,libelle:string} []=[]

    id:number = 0
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient,
    private router: Router){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_filiere"]
    })
  }
  ngOnInit(): void {
    this.Departements();
    this.http.get("http://localhost/preinscriptions_online_api/filieres_admin/getFiliere.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_filieres=reponse;
      console.log(this.les_filieres);
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
    this.http.post("http://localhost/preinscriptions_online_api/filieres_admin/editFiliere.php",this.les_filieres[0]).
    subscribe((reponse:any)=>
    {
      console.log(reponse);
      this.router.navigate(['/liste_filieres'])
    })
  }
  
}
