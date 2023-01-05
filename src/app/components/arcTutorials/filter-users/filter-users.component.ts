import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent {
  message : any;
  name = 'sreekanth'
  text : any;
  firstName:any;
  textValue:any;
  newTextValue:any;
  users = [
    {userId : 434, username: 'krishna'},
    {userId : 234, username: 'Ram'},
    {userId : 45, username: 'Mark'},
  ];
  constructor(public usersService: UsersService, public router : Router) {}
  ngOnInit() {

  }

  newMessage(textValue :any){
    this.router.navigate(['/','listUsers'])
    this.newTextValue = this.textValue;
    this.text = this.usersService.changeMessage(textValue);
    console.log(this.text)
  }
}
