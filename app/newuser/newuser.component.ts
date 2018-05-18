import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Http,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private http: Http) { }

  userObj : object = {};
  isUserAdded : boolean =false;

  addNewUser(user)
  {
    this.userObj = 
    {

      "firstname" : user.firstname,
      "Lastname" : user.Lastname

    }
    this.http.post("http://localhost:5555/users",this.userObj)
    .subscribe(
      (res:Response) =>
    {
      // console.log(res);
      // if(!res){

      //   alert("User Added Succesfully");
      // }
      // else{
      //   alert("User Not Added");
      // }
      this.isUserAdded = true;
 
    })
  }

  ngOnInit() {
  }

}
