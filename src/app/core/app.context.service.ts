import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { UtilityService } from "@apc-ng/common-services/lib/utility.service";
import { Context } from './app.context';
import { map, take, catchError  } from 'rxjs/operators';

@Injectable()
//This service used for to maintain application level context.
export class ApplicationContextService {
    readonly useMockCompletions: boolean = false;

    // //Strongly type object
     private appContextModel: Context = new Context();
     private contextSubject = new BehaviorSubject<Context>(this.appContextModel);
     context = this.contextSubject.asObservable();


    private pageContentHeight = new BehaviorSubject<number>(0);
    constructor(
       // private utilityService: UtilityService
    ) {}

    getContext() {
        //debugger;
        return this.appContextModel;
    }

    setContext(value: Context) {
        this.appContextModel = value;
    }

    fireChangeEvent() {
        this.contextSubject.next(this.appContextModel);
    }

    getPageContentHeight(): Observable<number> {
        return this.pageContentHeight.pipe(map(m => Number(m)));
    }

    setPageContentHeight(height: number) {
        //if (this.utilityService.isValidProperty(height) && height > 0) {
            this.pageContentHeight.next(height);
        //}
    }

    urlBase64Decode(str : string) : string {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return atob(output);
    }


    getUserFromToken(str : string) : any {
        var token = str;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(this.urlBase64Decode(encoded));
        }
        return user;
    }
}
