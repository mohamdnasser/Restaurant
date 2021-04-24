import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private baseUrl: string = 'http://localhost:8080/api/allCategories';
  constructor(private http: HttpClient) { }



  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(
        Response =>Response
      )
    )
  }

}
