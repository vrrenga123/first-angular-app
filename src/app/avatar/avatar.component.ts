import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, ViewChild, ElementRef, Input } from "@angular/core";
import { KeycloakService } from '../keycloak/keycloak.service';
import { LoginService } from '../core/login.service'

@Component({
    selector: 'apc-avatar',
    templateUrl: 'avatar.component.html'
})

export class ApcAvatarComponent implements OnInit {
    base64Image: string = "";
    userName: string = "";
    userId : string = "";
    @Input() isLoading :boolean = false;
    constructor(private loginService : LoginService) {
        this.userName = this.loginService.getFullName();
        this.userId = this.loginService.getUsername();
    }
   
    ngOnInit() {
       //debugger;
      
      this.appendFullStoryScript();
    }

    private appendFullStoryScript(): void {
        //Add fullstory to the application if  config is set to on
        // if (this.appConfigService.fullStoryConfig.on){
            let script =  document.createElement( 'script' );
            script.innerHTML =  `window['_fs_debug'] = false;
                                window['_fs_host'] = 'fullstory.com';
                                window['_fs_org'] = 'id';
                                window['_fs_namespace'] = 'FS';
                                (function(m,n,e,t,l,o,g,y){
                                    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                                    g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
                                    o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
                                    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                                    g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
                                    y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
                                    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                                    g.clearUserCookie=function(){};
                                })(window,document,window['_fs_namespace'],'script','user');`;
            document.head.appendChild( script ); 

            //set user data to fullstory
            //const userDirectory = this.appConfigService.getUserDirectory();
            script = document.createElement( 'script' );
            script.innerHTML = `FS.identify('${ this.userId}',{displayName:\'${this.userName}\',title_str:\'${ this.userId}\',department_str:\'${ this.userId}\',email:'${ this.userId}'});`;
            document.head.appendChild( script );            
        }
    } 
