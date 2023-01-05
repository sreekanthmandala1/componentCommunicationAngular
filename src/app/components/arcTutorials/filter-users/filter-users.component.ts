import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent {
  text : any;
  users = [
    {userId : 434, username: 'krishna'},
    {userId : 234, username: 'Ram'},
    {userId : 45, username: 'Mark'},
  ];
  constructor(public usersService: UsersService, public router : Router) {}

  ngOnInit() {}

  newMessage(){
    this.router.navigate(['/','listUsers'])
    this.text = this.usersService.changeMessage(this.users);
  }
}
