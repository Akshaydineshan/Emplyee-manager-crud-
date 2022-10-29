import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient,) { }

  getEmp(){
    return this.http.get("http://localhost:3000/employee")
  }

  addEmp(data:any){
    return this.http.post("http://localhost:3000/employee",data)
  }

  deleteEmp(id:any){
   return this.http.delete(`http://localhost:3000/employee/${id}`)
  }

  updateEmp(empForm:any,emp:any){
    console.log("empformser",empForm);
    console.log("empformser",emp._id);

    
    
    
    return this.http.put(`http://localhost:3000/employee/${emp._id}`,empForm)
  }


}


