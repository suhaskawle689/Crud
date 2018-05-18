import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit 
{

  id :any;
  users = [];
  data : object = {};

  userObj:object = {};

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private router:Router, private activatedroute : ActivatedRoute, 
    private http:Http) { }

  ngOnInit() 
  {
      this.activatedroute.params.subscribe(params=>
     {
        this.id = params['id']
      });
        this.http.get("http://localhost:5555/users").subscribe
       ((res:Response)=>
      
      
         this.users = res.json()
         
      )

     for(var i=0;i<this.users.length;i++)  
    {
        if (this.users[i].id = this.id)
        {
          this.data = this.users[i];
          break;
        }
    }
  
  }

  updateUser(user)
  {
      {
        this.userObj = {
          "firstname" : user.firstname,
          "Lastname" : user.Lastname,
        }

        const url = `${"http://localhost:5555/users"}/${this.id}`;
        this.http.put(url,JSON.stringify(this.userObj),{headers :this.headers})
        .toPromise().then
        {
          (()=> {
            this.router.navigate(['/']);  })
        }
      }
  }
}