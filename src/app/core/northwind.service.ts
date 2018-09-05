import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { People } from '../customers/people.model'
import { ApplicationContextService } from './app.context.service';
import {IEmployee} from './app.model';


@Injectable()
export class NorthwindServiceContract {
    employees : Observable<IEmployee[]>
    private _employees: BehaviorSubject<IEmployee[]>;
    private baseUrl: string;
    private dataStore: {
        employees: IEmployee[]
      };
    constructor(private httpClient : HttpClient, private context : ApplicationContextService){
        this.baseUrl = 'https://services.odata.org/V4/Northwind/Northwind.svc';
        this.dataStore = { employees: [] };
        this._employees = <BehaviorSubject<IEmployee[]>>new BehaviorSubject([]);
        this.employees = this._employees.asObservable();
    }

    
    getEmployees(){
        this.httpClient.get<IEmployee[]>(`${this.baseUrl}/Employees?$format=json`).subscribe((data : any) => {
            this.dataStore.employees = data.value;
            this._employees.next(Object.assign({}, this.dataStore).employees);
          }, error => console.log('Could not load employees.'));
    }
    


}