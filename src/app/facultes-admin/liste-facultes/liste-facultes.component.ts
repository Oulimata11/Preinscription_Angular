import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-facultes',
  templateUrl: './liste-facultes.component.html',
  styleUrls: ['./liste-facultes.component.css']
})
export class ListeFacultesComponent implements OnInit {
  les_facultes: {id_faculte:number,libelle:string} []=[]

  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.http.get("http://localhost/preinscriptions_online_api/index.php").
    subscribe((reponse:any)=>
    {
      this.les_facultes=reponse;
      console.log(reponse);
    })
  }

}
