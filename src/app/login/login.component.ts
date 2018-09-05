import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {ServiceContractService} from '../core/service-contract.service'
import { LoginService } from '../core/login.service';
import { ApplicationContextService } from '../core/app.context.service';
import {Context} from '../core/app.context';
import { SideBarService } from '../core/left-navigation/left-navigation.service';
import { EntityType, Completion, Field, Workflow, Facility, BusinessUnit, Entity, WorkflowComponent, NavigationField } from "../core/app.model";
@Component({
   templateUrl: `login.component.html`,
   styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loading = false;
    private context : Context;
    constructor(private router: Router,private loginService: LoginService, private applicationContextService:  ApplicationContextService,private route: ActivatedRoute,private sideBarService: SideBarService){
        this.context = this.applicationContextService.getContext();
    }

    go() {
        //this.flashMessagesService.grayOut(true);
        //this.flashMessagesService.show('we were at home' + Math.random(), { cssClass: 'alert-success', timeout: 3000, closeOnClick:true });
        // this.flashMessagesService.show('My component has initialized!', {
        //     classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
        //     timeout: 12000, // Default is 3000
        //   });
        //this.router.navigate(['/gets']);
    }
  ngOnInit() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
   
  }
  public login(username, password) {
     var businessUnit : BusinessUnit = new BusinessUnit();
     businessUnit.businessUnitName = "GOM";
    this.loading = true;
    return this.loginService.getUserAuth(username, password)
    .then((res : any) => {
        this.loading = false;
        
        this.context.userToken = res;
        this.context.isLoggedIn = true;
        this.context.isShowSidebar =true;
        this.sideBarService.toggle(true);
        this.context.businessUnit = businessUnit;
        this.applicationContextService.fireChangeEvent();
        this.router.navigate(['home']);
    }).catch(err => {
        this.loading = false;
    });
  }

  public cancel(){

  }
}




