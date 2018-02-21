import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private _productURl = './api/products/products.json';
    constructor(private _http: HttpClient){}
    getProducts(): Observable<IProduct[]> {

        return this._http.get<IProduct[]>(this._productURl);
    }
}
