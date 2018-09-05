import 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer,IPeople, IProductDetails } from './app.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EchoService {
	constructor(private httpClient: HttpClient) {}

	public getPosts(): Observable<ICustomer[]> {
		return this.httpClient.get<ICustomer[]>('https://jsonplaceholder.typicode.com/posts');
	}

    public getPost(id: number): Observable<ICustomer> {
        return this.httpClient.get<ICustomer>('https://jsonplaceholder.typicode.com/posts/' + id);
	}
	
	public getPeople() : Observable<IPeople[]>{
		return this.httpClient.get<IPeople[]>('https://services.odata.org/TripPinRESTierService/People'); 
	}

	public getProductDetails() : Observable<IProductDetails[]>{
		return this.httpClient.get<IProductDetails[]>('https://services.odata.org/V3/OData/OData.svc/ProductDetails?$format=json');
	}

} 
