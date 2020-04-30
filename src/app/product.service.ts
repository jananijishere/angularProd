import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable, ObservableInput} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  public getData(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/api/standup`);
  }
  public postData(value: any): Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:3000/api/standup`,value)
  }
  public putData(value: any): Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:3000/api/updateStandup`,value)
  }
  public deleteData(): Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:3000/api/deleteStandup/5ea83a93bf37c33b6cf39e49`)
  }
}
