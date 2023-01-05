import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUsers :any;
  message : any;
  newTextValue:any;
  constructor(public usersService : UsersService){}

  ngOnInit():void{
    // this.listUsers = this.usersService.getUsers();
    // console.log(this.listUsers)

    //behavioural subject
    this.usersService.currentMessage.subscribe((data)=>{
      this.message = data;
      console.log(this.message)
    })
  }
}
