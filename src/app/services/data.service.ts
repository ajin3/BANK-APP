import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  db: any = {
    1000: { "accno": 1000, "username": "Ajin", "password": 1000, "balance": 5000 },
    1001: { "accno": 1001, "username": "Akhil", "password": 1001, "balance": 4000 },
    1002: { "accno": 1002, "username": "Anandhu", "password": 1002, "balance": 3000 },
  }
  constructor() { }

  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }




  login(acno: any, pswd: any) {

    let db = this.db

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        this.currentUser = db[acno]["username"]
        this.saveDetails()
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user does not exisist")
      return false
    }
  }
  register(username: any, acno: any, password: any) {
    let db = this.db
    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno, username,
        password,
        "balance": 0
      }
      console.log(db);
      this.saveDetails()
    return true
  }
}
  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount
        this.saveDetails()
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }
    }
else{
  alert("user does not exisist")
  return false

}
  }

  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db
    if(acno in db){
      if(password==db[acno]["password"]){

        if ( db[acno]["balance"]>amount) {

          db[acno]["balance"]-=amount
          this.saveDetails()
          return db[acno]["balance"]
          
        }
        else{
          alert("insufficient balance")
          return false
        }

      }
      else{
        alert("incorrect password")
        return false
      }
}
   else{
     alert("user does not exisist")
     return false
   }
  }
}