import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getUsers(){
    const users = [
      {userId : 434, username: 'krishna'},
      {userId : 234, username: 'Ram'},
      {userId : 45, username: 'Mark'},
    ];
    return users;
  }

  messageSource = new BehaviorSubject<any>("");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message:any){
    this.messageSource.next(message)
  }
}
