import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json'});
users = [];
id : any;
todaydate:any;
fetchUserData = function()
  {
    this.http.get("http://localhost:5555/users").subscribe(
    (res : Response) => {
      this.users= res.json();

    }
  )

}

deleteUser(id){

  if(confirm("Are you sure?"))
  {
      const url = `${"http://localhost:5555/users"}/${id}`;
      this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(()=> { this.fetchUserData();  }
    )
  }
}

  constructor(private http:Http) { }

  ngOnInit() {
    this.fetchUserData();
  }

}
