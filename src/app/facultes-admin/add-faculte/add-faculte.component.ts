import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculte',
  templateUrl: './add-faculte.component.html',
  styleUrls: ['./add-faculte.component.css']
})
export class AddFaculteComponent implements OnInit{

  constructor(private http:HttpClient){}

  les_facultes:{libelle:string}= {libelle:""}

  ngOnInit(): void {
  }

  Ajouter():void{
    this.http.post("http://localhost/preinscriptions_online_api/facultes_admin/addFaculte.php",this.les_facultes).
    subscribe((reponse:any)=>
    {
      this.les_facultes=reponse;
      console.log(this.les_facultes);
    })
  }
}
