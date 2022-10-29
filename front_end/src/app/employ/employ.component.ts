import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  employees: any;


  empForm: any = this.fb.group({

    name: ['', [Validators.required]],
    position: [''],
    department: [''],

  })

  constructor(private fb: FormBuilder, private empS: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()//get emp


  }


  getEmployees() {
    this.empS.getEmp().subscribe((data: any) => {
      this.employees = data

    }, error => console.log(error)
    )
  }


  //add------------
  submitBtn() {
    if(this.editMode){
      this.empS.updateEmp(this.empForm.value,this.emp).subscribe((data)=>{
        console.log("result",data);
        this.getEmployees()
        this.editMode=false;
        
      })
    
      
    }else{
      var data: any = {
        name: this.empForm.value.name,
        position: this.empForm.value.position,
        department: this.empForm.value.department,
  
      }
      this.empS.addEmp(data).subscribe((data: any) => {
        console.log(data);
  
  
      }, error => console.log(error)
      )
    }
   
  }

  onDelete(id: any) {
    if(confirm("are you sure to delete this employee")){
      this.empS.deleteEmp(id).subscribe((data) => {
        console.log(data);
        this.getEmployees()
  
  
      }, error => console.log("error")
      )

    }
  }

emp:any
editMode:boolean=false;
  onEdit(emp:any){
    this.editMode=true;
   
    this.empForm.patchValue(emp)
    this.emp=emp;
  
    
    
    // this.empS.updateEmp(this.empForm.value,emp).subscribe((data)=>{
      
      
    // })

  }








}
