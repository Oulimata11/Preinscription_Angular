import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-faculte',
  templateUrl: './edit-faculte.component.html',
  styleUrls: ['./edit-faculte.component.css']
})
export class EditFaculteComponent implements OnInit {

  les_facultes: {id_faculte:number,libelle:string} []=[]
  id:number = 0
  constructor(private route_actuelle: ActivatedRoute,private http:HttpClient,private router: Router){
    route_actuelle.params.subscribe((params:any)=>{
      this.id=params["id_faculte"]
    })
  }
  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/facultes_admin/getFaculte.php?id="+this.id).
    subscribe((reponse:any)=>
    {
      this.les_facultes=reponse;
      console.log(this.les_facultes);
    })
  }

  Modifier(): void{
    this.http.post("http://localhost/preinscriptions_online_api/facultes_admin/editFaculte.php",this.les_facultes[0]).
    subscribe((reponse:any)=>
    {
      console.log(reponse);
      this.router.navigate(['/liste_facultes'])
    })
  }
}
