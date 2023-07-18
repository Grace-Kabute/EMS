import { Employee } from '../model/employee';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
addEmpURL : string;
  constructor(private http : HttpClient) { 
this.addEmpURL = 

  }
}
