import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-candidat',
  templateUrl: './delete-candidat.component.html',
  styleUrls: ['./delete-candidat.component.css']
})
export class DeleteCandidatComponent implements OnInit {
  id:number =0
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_candidat"]
    })
  }
  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/deleteCandidat.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      console.log("reponse du backend : ",reponse);
    })
  }

}
