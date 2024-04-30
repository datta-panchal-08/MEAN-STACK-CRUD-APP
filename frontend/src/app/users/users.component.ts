import { Component, inject } from '@angular/core';
import User from '../types/types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users : User[] = [];
  userService = inject(UserService);

  ngOnInit(){
    this.userService.getUsers().subscribe(result =>{
      this.users = result;
    })
  }
   delete(id:string)
   {
    const ok = confirm("Are You Sure Want To Delete User?");
    if(ok)
      {
         this.userService.deleteUser(id).subscribe((result)=>{
          alert("User Deleted Successfully..");
          this.users = this.users.filter((x)=> x._id != id )
         })
      }
   }

}
