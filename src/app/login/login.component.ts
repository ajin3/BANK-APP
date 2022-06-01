import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Perfect banking partner"
  accno="Username please"
  acno=""
  pswd=""
  



  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno);
    


  }
  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
    


  }

  login() {
    var acno = this.acno
    var pswd = this.pswd

   const result = this.ds.login(acno,pswd)

    if (result){
      
        alert("Login Successful")
        this.router.navigateByUrl('dashboard')
     
    }
    

  }


  // login(a:any,p:any) {
  //   var acno = a.value
  //   var pswd = p.value
  //   console.log(a.value);
    
  //   let db = this.db

  //   if (acno in db){
  //     if (pswd == db[acno]["password"]){
  //       alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else{
  //     alert("User doesnot exist")
  //   }

  // }
}
