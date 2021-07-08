import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private getData = "../assets/car.json";

  constructor(
    private http: HttpClient,
  ) { }

  getCar():Observable<any> {
    return this.http.get<any>(this.getData);
  }
}
