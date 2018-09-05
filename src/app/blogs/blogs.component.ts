import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, BehaviorSubject} from 'rxjs';
import { KeycloakService } from '../keycloak/keycloak.service';
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';



@Component({
    templateUrl : `blogs.component.html`
})

export class BlogsComponent implements OnInit {
    
  filter = 'All';
  todos: Observable<string[]>;
  private _todos: BehaviorSubject<string[]>;
  arr = new Array();
  private example = of(null);
  //delay output of each by an extra second
  private message = merge(
    this.example.pipe(mapTo('Hello')),
    this.example.pipe(
      mapTo('World!'),
      delay(2000)
    ),
    this.example.pipe(
      mapTo('Goodbye'),
      delay(3000)
    ),
    this.example.pipe(
      mapTo('World!'),
      delay(4000)
    )
  );
  private subscribe : any;
  constructor(private route : Router) { 
    
    this._todos = new BehaviorSubject<string[]>([]);
    this.todos = this._todos.asObservable();
    this.subscribe = this.message.subscribe(val => {
      debugger;
      this.arr.push(val); 
      this._todos.next(this.arr);
    });
  }

  ngOnInit() {
    //var roles = KeycloakService.getAppRoles();
    // if (roles[0] == "blogUrl")
    //   this.route.navigate(['/home']);
  }
  
  getAccess() : boolean {
    //var roles = KeycloakService.getAppRoles();
    //return roles.indexOf("blogUrl") > -1 ? true : false;
    return true;
  }

  async go(){
    //debugger;
    //alert (KeycloakService.getFullName());
    
  }

}

