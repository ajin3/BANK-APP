import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers: new HttpHeaders
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // currentUser: any
  // currentAcno: any
  // db: any = {
  //   1000: { "acno": 1000, "username": "Ajin", "password": 1000, "balance": 5000, transaction: [] },
  //   1001: { "acno": 1001, "username": "Akhil", "password": 1001, "balance": 4000, transaction: [] },
  //   1002: { "acno": 1002, "username": "Anandhu", "password": 1002, "balance": 3000, transaction: [] }
  // }
  constructor(private http:HttpClient) {
    
  }






//login

  login(acno: any, password: any) {

    const data = {
      acno,
      password
    }
    return this.http.post('http://localhost:3000/login',data)

  }

  //register

  register(username: any, acno: any, password: any) {
    const data={
      username,
      acno,
      password

    }
   return this.http.post('http://localhost:3000/register',data)
  }

  //deposit

  deposit(acno: any, password: any, amt: any) {
    const data = {
      acno,
      password,
      amt
    }

    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())

  }

getOptions(){
  const token = localStorage.getItem('token')
  let headers = new HttpHeaders()
  if (token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
}

  //withdraw

  withdraw(acno: any, password: any, amt: any) {
    const data = {
      acno,
      password,
      amt
    }

    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }
  
//transaction

  getTransaction(acno:any){
    const data = {
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())

  }

//delete

  deleteAcc(acno:any){
   
   return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }

}