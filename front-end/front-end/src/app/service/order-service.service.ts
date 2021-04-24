import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../model/order';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl: string = 'http://localhost:8080/api/allOrders';
  constructor(private http: HttpClient) { }



  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl).pipe(
      map(
        Response =>Response
      )
    )
  }





}
