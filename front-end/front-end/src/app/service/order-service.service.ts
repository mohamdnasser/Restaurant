import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../model/order';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
                                          
  private baseUrl: string = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }



  getOrders(): Observable<Order[]>{
    // return this.http.get<Order[]>( `${this.baseUrl}allOrders` ).pipe(
      return this.http.get<Order[]>( `${this.baseUrl}allOrders` ).pipe(
      map(
        Response =>Response
      )
    )
  }


  getOrdersByCategoryId(id): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}`).pipe(
      map(
        Response =>Response
      )
    )
  }

  getOrdersByKey(word): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}orderByKey?word=${word}`).pipe(
      map(
        Response =>Response
      )
    )
  }

}
