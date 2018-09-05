import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from '../core/app.model';
import { EchoService } from '../core/echo.services';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { People } from './people.model';
import 'rxjs/add/operator/toPromise';
import {ServiceContractService} from '../core/service-contract.service';

@Injectable()
export class PeoplesService {

    constructor(private serviceContractService: ServiceContractService,private echoService: EchoService, private httpClient : HttpClient) {}
    public people: People[] = [];

    public getAuth() : Promise<any> {
        return this.serviceContractService.getAuth.getAuthenticate()
        .then((res : any) => {return res});
    }


    public getPeoples() : Promise<People[]> {
        //return this.echoService.getPeople();
        // this.httpClient.get<IPeople[]>('https://services.odata.org/TripPinRESTierService/People') {
           
        // });
        //debugger;
        return this.serviceContractService.businessForecast.getData()
        .toPromise()
        .then((res : any) => {
            res = res["value"];
            var peop : Promise<People[]> = res.map(item => {
                return new People(
                  item.UserName,
                  item.FirstName,
                  item.LastName
                  
                );
              });
            return peop;     
            // setTimeout(()=>{    //<<<---    using ()=> syntax
                
            // }, 4000);
        }, 
        error => {
            var p : Promise<People[]>= null;
            return  Promise.resolve(p);                
        }); 
        //return Promise.resolve([]);
    }
}