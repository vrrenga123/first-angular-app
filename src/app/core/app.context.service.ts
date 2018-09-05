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
}
