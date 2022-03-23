import { Address } from './../models/address';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll(){
    // return this.http.get('${environment.apiUrl}/addresses');
    return this.http.get("http://localhost:8080/addresses");
  }

  getAll2() {
    return this.http.get(`${environment.apiUrl}/addresses`);
  }

  Save(data: Address) {
    return this.http.post(`${environment.apiUrl}/addresses`, data);
  }
}
