import { Component, Input, OnChanges, OnDestroy, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from "rxjs";
import { map, take, catchError  } from 'rxjs/operators';
import { ApplicationContextService } from "../app.context.service";
//import { NavigationService } from '../navigation.service';
//import { AppConfigService } from "../app.config.service";

import { BusinessUnit, Workflow, NavigationParam, WorkflowName } from "../app.model";
import { Context } from "../app.context";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { FieldResolver } from '../resolver/fieldsResolver';
//import { debounce } from "rxjs/operators/debounce";
import { SideBarService } from './left-navigation.service';
@Component({
    selector: 'router-links',
    templateUrl: './left-navigation.component.html',
    styleUrls: ['./left-navigation.component.css']
})

export class LeftNavigationComponent implements OnChanges, OnDestroy {
    @Input() isSideBarClicked: any;
    sidebarWidthClassName: string = "slideInRight";
    public imageUrls: any = {};
    imageUrlsSub: Subscription;
    routerEndSub: Subscription;
    isSidebarOpened: Boolean = true;
    context: Context;
    
    constructor(private router: Router,private httpClient: HttpClient,private appContextService: ApplicationContextService,private fieldResolver: FieldResolver,private sideBarService: SideBarService) {
        //debugger;
        this.context = this.appContextService.getContext();
        this.context.navigationField = this.fieldResolver.navigationField;
        this.imageUrlsSub = this.getIconPaths()
        .subscribe(value => {
            this.imageUrls = value;
        });
        
    }

    showWorkflows() {

        return this.context.allNavigationWorkflows.length > 0;
    }    

    getIconPaths(): Observable<any> {
        const iconPaths: any = {}
        return this.httpClient.get('./assets/jsons/icons.json').pipe(
            map(res => {
                //debugger;
                const responseIcons = res['fonts'];
                const keys = Object.keys(responseIcons).forEach(key => {
                    if (key === this.context.businessUnitName){
                        iconPaths[WorkflowName.LandingPage] = responseIcons[this.context.businessUnitName];
                    } else if (WorkflowName[key]) {
                        iconPaths[WorkflowName[key]] = responseIcons[key];
                    } else {
                        iconPaths[key] = responseIcons[key];
                    }

                })
                return iconPaths;
            }));
            
    }

   

    ngOnChanges(changes: SimpleChanges) {
        this.sidebarWidthChanges(changes['isSideBarClicked'] ? changes['isSideBarClicked'].currentValue : this.isSideBarClicked);
    }

    sidebarWidthChanges(clicked: boolean) {
        if (this.context.isMobile) {
            this.sidebarWidthClassName = clicked ? 'sidebarMobileOpen' : 'sidebarMobileClose';
        } else {
            this.sidebarWidthClassName = clicked ? "slideInLeft" : this.context.pinSwitched ? "pinSwitchOff" : "pinSwitchIn";
            this.isSidebarOpened = this.sidebarWidthClassName !== 'slideInLeft';
        }

    }
   
    isActive(item: Workflow): boolean {
        if (item.name === this.context.workflowName){
            return true;
        }
        return false;       
    }    

    workflowClick(workflow: Workflow) {
        var url1: string = workflow.name;
        url1 = url1.toLowerCase();
        //this.navigationService.redirectURL(this.context.businessUnitName, this.context.facilityName, this.context.fieldName, workflow.name, null);
        this.context.workflow = workflow;
        this.router.navigate([url1]);
        //alert(workflow.name);
    }

    isImagesAvailable(): boolean {
        return this.imageUrls ? true : false;
    }

    homeClicked() {
        //this.navigationService.navigateHome();
        this.router.navigate(["home"]);
    }

    pinClicked() {
        this.context.pinSwitched = !this.context.pinSwitched;
        this.sidebarWidthClassName = this.context.pinSwitched ? "pinSwitchOff" : "pinSwitchIn";
    }

    ngOnDestroy() {
        if (this.imageUrlsSub) {
            this.imageUrlsSub.unsubscribe();
        }
        if (this.routerEndSub) {
            this.routerEndSub.unsubscribe();
        }
    }
}
