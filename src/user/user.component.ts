import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  users=[];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUserService().subscribe((data:any[]) => {
this.users=data;
console.log(JSON.stringify(this.users));
    })
  }



}