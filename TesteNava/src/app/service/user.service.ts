import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';
import { ServiceBase } from './service-base';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase {

  url = 'https://isonplaceholder.typicode.com/users'; 

  constructor(httpClient: HttpClient) {
      super(httpClient);
  }
  
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

 
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, JSON.stringify(User), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  
  deleteUser(user: User) {
    return this.httpClient.delete<User>(this.url + '/' + user.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

}