import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(postData: RegisterPostData){
    return this.httpClient.post(`${this.baseUrl}/users`, postData)
  }

  getUserDetails(email: string, password: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users?email=${email}&passwird=${password}`);
  }
}
