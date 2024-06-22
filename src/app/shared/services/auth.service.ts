import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://localhost:8080/utilisateurs/login"
  constructor(private http:HttpClient) { }
  login(credentials:{userName:string,password:string}):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,credentials);
  }
  saveToken(token:string){
    localStorage.setItem('jwtToken',token);
  }
  getToken(){
    return localStorage.getItem('jwtToken');
  }
  removeToken(){
    localStorage.removeItem('jwtToken');
  }
  saveUserRoles(roles:string[])
  {
    localStorage.setItem('userRoles',JSON.stringify(roles));
  }
  getUserRoles():string[]{
   const roles= localStorage.getItem('userRoles');
    return roles?JSON.parse(roles):[];
  }
}
