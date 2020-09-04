import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API: string = "https://reqres.in/api"

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get<any>(`${this.API}/users`)
  }
}
