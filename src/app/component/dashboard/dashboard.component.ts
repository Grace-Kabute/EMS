import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 
  employeeDetail !: FormGroup;
  employerObject : Employee = new Employee();

  constructor(private FormBuilder : FormBuilder){}

  ngOnInit(): void {
    
    this.employeeDetail = this.FormBuilder.group({
      name: [''],
      email: [''],
      salary:['']
    });
  }
addEmployee(){
  console.log(this.employeeDetail)
  this.employerObject.id = this.employeeDetail.value.id;
  this.employerObject.name = this.employeeDetail.value.name;
  this.employerObject.email = this.employeeDetail.value.email;
  this.employerObject.salary = this.employeeDetail.value.salary;
}

}
