import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit{

  id:number = 0
  les_filieres: {id_filiere:number,nom:string} []=[]
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_departement"]
    })
    }

  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/listefiliere.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_filieres=reponse;
      console.log(this.les_filieres);
    })
  }

}
