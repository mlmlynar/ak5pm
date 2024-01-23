import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIService {

  constructor(private http: HttpClient) { }

  getCurrency(zmeny:String,domeny:String): Observable<any>{
    if(zmeny){
      let url = `https://v6.exchangerate-api.com/v6/d9d7b889ff741fa680122309/pair/${zmeny}/${domeny}`;
      return this.http.get(url)
    }
    return of(null);
  }
}
