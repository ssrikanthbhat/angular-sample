import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private productServiceUrl = './api/products/products.json'
    
    constructor(private httpClient : HttpClient){}
    
    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.productServiceUrl)
                                .do(data => console.log("ALL: " +  JSON.stringify(data)))
                                .catch(this.handleError);
    }

    private handleError(error : HttpErrorResponse) {
        console.log(error.message)
        return Observable.throw(error.message)
    }
}