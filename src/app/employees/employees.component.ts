import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable,BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { NorthwindServiceContract } from '../core/northwind.service';
import { IEmployee } from '../core/app.model';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalComponent } from "../shared/modals/confirmation.modal";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html', 
  styles : ['.select-wrapper {position: relative !important;margin-top: 1rem !important;width: 200px !important;}']
})
export class EmployeesComponent implements OnInit {
  employees: Observable<IEmployee[]>;
  base64Image: string = "";
  files : any;
  filestring : any;
  emp : any;
  //selectedValue: IEmployee = new BehaviorSubject<IEmployee>(this.emp);
  
  employeeDetails : string;
  
  
  
  option : any;
  options : any[]; 
  
  options1 : any[];
  option1: any;
  employee : any;



  greeting: Promise<string>|null = null;
  arrived: boolean = false;
  private resolve: Function|null = null;
 
 
 
  constructor (private northwindServiceContract : NorthwindServiceContract,private modalService: NgbModal){
    // this.options = [
    //   { name: 'First', code: '1' },
    //   { name: 'Second', code: '2' },
    //   { name: 'Third', code: '3' }
    // ];
    // this.option = this.options[1];
    this.reset();
   }
    ngOnInit() {
      this.employees = this.northwindServiceContract.employees;
      this.options1 = [];
      this.options = [];
      this.employees.pipe().map((data) => {
        data.sort((a, b) => {
            return a.FirstName < b.FirstName ? -1 : 1;
         });
        return data;
     }).subscribe(
        (data1: any) => {
          for (let entry of data1) {
            this.options.push(entry);
            this.options1.push(entry);
          }}
      );

      this.northwindServiceContract.getEmployees();
    }
  
    getImage(data){
      return 'data:image/jpg;base64,' + data;
    }

    getFiles(event) {
      this.files = event.target.files;
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.files[0]);
  }
 
  _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.filestring = 'data:image/png;base64,' + btoa(binaryString);  // Converting binary string data.
 }
 doSomething(){
    console.log(this.option1);
    console.log(this.employee);
    this.employeeDetails = this.option1.FirstName + "-" + this.option1.LastName;
 }

 doSomething1(){
  console.log(this.option);
  //this.employeeDetails = this.selectedValue.FirstName + "-" + this.selectedValue.LastName;
}


 deleteTodo(){
  const modal = this.modalService.open(ConfirmationModalComponent, { windowClass: 'slideInDown' });
  modal.componentInstance.message = "Are you sure want to delete this event?";
  modal.result.then(x => {
    alert('deleted');
      
  },
      () => { });
 }
 setSelected(){
   this.option = this.options[2];
  this.employees.pipe(map((data :any) => data.filter((emp : IEmployee) => emp.EmployeeID == 4)))
    .subscribe(
      (data1: any) => {
        for (let entry of data1) {
               console.log(entry.EmployeeID);
               this.option = entry;
        }}
    );
  
 }



 reset() {
  this.arrived = false;
  this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
}

clicked() {
  if (this.arrived) {
    this.reset();
  } else {
    this.resolve ({"empid" : 1, "empname" : "renga" });
    this.arrived = true;
  }
}
  
}