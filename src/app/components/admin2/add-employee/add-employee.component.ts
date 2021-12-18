import { Role } from './../../admin-dashboard/Models/GetRoles';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../admin-dashboard/Service/admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  AddEmployeeForm: FormGroup;
  roles:Role[];
  err : string;
  constructor( public fb: FormBuilder, private adminService:AdminService) {
    this.AddEmployeeForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
      lastName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber : new FormControl('',[Validators.required]),
      hourSalary : new FormControl('',[Validators.required]),
      monthlyWorkingHours : new FormControl('',[Validators.required]),
      roleId : new FormControl('',[Validators.required])
     });
   }
   
  ngOnInit(): void {
    this.getRoles();
  }
  
  addEmployee(){

     this.adminService.addEmployee(this.AddEmployeeForm).subscribe((res)=>{
             if(res.success){
               console.log(res.success);
               this.err = '';
             }else{
               this.err = res.errors[0];
              console.log(res.errors);
             }
    }
    , (err)=>{
      console.log(err);     
    })
  }
  getRoles(){
    this.adminService.getRoles().subscribe((res)=>{
         if (res.success){
             this.roles = res.data;
         }
    })
  }

}
