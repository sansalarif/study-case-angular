import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from "../models/customer-model";

const _endpoint = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/';

@Injectable({
    providedIn: 'root'
})

export class CustomerService{
    constructor(private http: HttpClient){}

    getAll():Observable<Customer[]>{
        return this.http.get<Customer[]>(`${_endpoint}/GetAllUsersData`);
    }

}