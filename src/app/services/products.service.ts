import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  baseUrl = 'https://makeup-api.herokuapp.com';


  getConcealer() : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/products.json?product_category=concealer&product_type=foundation`)
  }

  getDetailProduct(id) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/products/${id}`);
  }
}
