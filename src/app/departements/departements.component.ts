import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  id:number = 0
  les_departements: {id_departement:number,libelle:string} []=[]
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_faculte"]
    })
    }

  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/listedepartement.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_departements=reponse;
      console.log(this.les_departements);
    })
  
  }

}
