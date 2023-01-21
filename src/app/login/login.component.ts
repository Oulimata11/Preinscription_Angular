import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  login:{email:string,password:string,role:string}={
  email:"",password:"",role:""
  }
  constructor(private http:HttpClient,private router: Router){}

  ngOnInit(): void {

  }

Connexion():void{
  this.http.post("http://localhost/preinscriptions_online_api/login.php",this.login).
    subscribe((reponse:any)=>
    {
      this.login=reponse;
      if (this.login.role=="user") {
        this.router.navigate(['/facultes'])
      } else if(this.login.role=="admin"){
        this.router.navigate(['/dashboard'])
      }
    
    })
}

}
