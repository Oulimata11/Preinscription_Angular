import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit{

  un_user:{username:string,password:string,email:string}={
    username:"",password:"",email:""
  }
  constructor(private http:HttpClient){}


  ngOnInit(): void {}

  Inscription():void{
    this.http.post("http://localhost/preinscriptions_online_api/inscription.php",this.un_user).
    subscribe((reponse:any)=>
    {
      this.un_user=reponse;
      console.log(this.un_user);
    })
  }
}
