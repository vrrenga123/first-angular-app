import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { People } from '../customers/people.model'
import { ApplicationContextService } from './app.context.service';
@Injectable()
export class ServiceContractService {
    public userToken : any;
    private cnt : ApplicationContextService;
    extractData(res: HttpResponse<Object>) : any {
        debugger;
        var token = res as any;
        var jwt =  this.cnt.getUserFromToken(token.access_token);
        return jwt;
      } 

    businessForecast: {

        getData: () => Observable<any>;
        
    }

    getAuth :{
        getAuthenticate: () => Promise<any>;
    }

    getUserAuth :{
        getUserAuthenticate : (username, password) => Promise<any>;
    }

    getAsync :{
        resolveAfter2Seconds : (x) => Promise<any>;
    }

    constructor(private httpClient : HttpClient, private context : ApplicationContextService){
        this.businessForecast = {
        
            getData: (): Observable<People> => {
                
               return this.httpClient.get('https://services.odata.org/TripPinRESTierService/People') as Observable<any>;
            }

            
        }
        this.getAuth ={

            
     

            getAuthenticate: () : Promise<any> =>{
                const httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type':  'application/x-www-form-urlencoded'
                    })
                  };

                  

            //       headerDict = {
            //         "Content-Type": "application/x-www-form-urlencoded",
            //         'Access-Control-Allow-Origin': 'http://localhost:8080/auth',
            //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            //         'Access-Control-Allow-Headers': ' Origin, Content-Type, Authorization, Content-Length, X-Requested-With',
            //         'Accept': 'application/x-www-form-urlencoded'
             
            //    }
             
            //     requestOptions = {                                                                                                                                                                                 
            //      headers: new HttpHeaders(this.headerDict), 
            //    };

                //   const data =  {
                //      username : 'admin',
                //      password : 'admin',
                //      client_id : 'admin-cli',
                //      grant_type : "password"
                    
                // }  

            //     const data =  {
            //         client_id : 'client-ui',
            //         username : 'renga',
            //         password : 'Enter321',
            //         grant_type : "password",
            //         realm: 'angularr',
            //    }  
                  this.cnt = this.context;

                var _headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); //.set('Access-Control-Allow-Origin', '*');
                _headers = _headers.append('Accept', '*/*');
                var data1 = "username=admin&password=admin&client_id=admin-cli&grant_type=password";
                var data2 = "username=renga&password=Enter321&client_id=client-ui&grant_type=password";
               var url1 = 'http://localhost:8080/auth/realms/AngularR/protocol/openid-connect/token';
               var url = 'http://localhost:8080/auth/realms/master/protocol/openid-connect/token';


            //    this.httpClient.post<any>(url,data1, { headers : _headers }).subscribe((res :any) =>{
            //        debugger;
            //         var res1=res;
            //         _headers.append("Authorization" , 'Bearer ' +  res1.access_token);
            //         var data2 = "code=" + res1.access_token + "&grant_type=password&client_id=client-ui&username=renga&password=Enter321";
            //         this.httpClient.post<any>(url1, data2, { headers : _headers }).subscribe((res : any) => {
            //             var res1 = res;
            //             var jwt =  this.context.getUserFromToken(res1.access_token);
 
            //             return jwt;
            //         })
            //     } );

               
            return this.httpClient.post<any>(url,data1, { headers : _headers }).toPromise().then((res : any) =>{
                var res1=res;
                _headers.append("Authorization" , 'Bearer ' +  res1.access_token);
                var data2 = "code=" + res1.access_token + "&grant_type=password&client_id=client-ui&username=renga&password=Enter321";
                return this.httpClient.post<any>(url1, data2, { headers : _headers }).toPromise().then((token : any) => {
                    var jwt =  this.cnt.getUserFromToken(token.access_token);
                    return jwt;
                }).catch(err => {
                    return Promise.reject(err.error || 'Server error');
                });
            }).catch(err => {
                return Promise.reject(err.error || 'Server error');
            });

               
            }
        }
        this.getUserAuth={
            getUserAuthenticate: (username, password) : Promise<any> =>{
                const httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type':  'application/x-www-form-urlencoded'
                    })
                  };
                  var _headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); //.set('Access-Control-Allow-Origin', '*');
                  _headers = _headers.append('Accept', '*/*');
                  var data1 = "username=admin&password=admin&client_id=admin-cli&grant_type=password";
                  var data2 = "username=renga&password=Enter321&client_id=client-ui&grant_type=password";
                 var url1 = 'http://localhost:8080/auth/realms/AngularR/protocol/openid-connect/token';
                 var url = 'http://localhost:8080/auth/realms/master/protocol/openid-connect/token';


                 return this.httpClient.post<any>(url,data1, { headers : _headers }).toPromise().then((res : any) =>{
                    var res1=res;
                    _headers.append("Authorization" , 'Bearer ' +  res1.access_token);
                    var data2 = "code=" + res1.access_token + "&grant_type=password&client_id=client-ui&username=" + username + "&password=" + password;
                    return this.httpClient.post<any>(url1, data2, { headers : _headers }).toPromise().then((token : any) => {
                        var jwt =  this.context.getUserFromToken(token.access_token);
                        this.userToken = jwt;
                        return jwt;
                    }).catch(err => {
                        return Promise.reject(err.error || 'Server error');
                    });
                }).catch(err => {
                    return Promise.reject(err.error || 'Server error');
                });
            }


        }

        this.getAsync ={
            resolveAfter2Seconds : (x) : Promise<any> => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve(x);
                  }, 2000);
                });
              }
        }
    }

   

}