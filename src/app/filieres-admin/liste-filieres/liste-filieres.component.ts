import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-filieres',
  templateUrl: './liste-filieres.component.html',
  styleUrls: ['./liste-filieres.component.css']
})
export class ListeFilieresComponent implements OnInit {
  constructor(private http:HttpClient){}
  les_filieres: {id_filiere:number,nom:string,id_departement:number} []=[]

  ngOnInit(): void {

    this.http.get("http://localhost/preinscriptions_online_api/filieres_admin/listeFilieres.php").
    subscribe((reponse:any)=>
    {
      this.les_filieres=reponse;
      console.log(this.les_filieres);
    })
  }


}
