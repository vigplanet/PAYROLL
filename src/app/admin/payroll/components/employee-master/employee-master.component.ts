import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayrollService } from 'src/app/services/_payroll.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ico-employee-master',
  templateUrl: './employee-master.component.html',
  styleUrls: ['./employee-master.component.scss']
})
export class EmployeeMasterComponent implements OnInit {

  EmpList = [];

  EmployeeForm: FormGroup;
  advancedForm: FormGroup;
  submitted = false;
  advancedsubmitted = false;

  constructor(private formBuilder: FormBuilder, public PayrollApiService: PayrollService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.EditData();

    this.PageLoad();

  }
  EditData() {
    this.EmpList = [];
    this.PayrollApiService.GetEmpList().subscribe({
      next: (res: any) => {
        this.EmpList = res.results.employeeListModel;
      }
    });
  }

  PageLoad() {
    this.EmployeeForm = this.formBuilder.group({
      empId: [0],
      empRegNo: ['', Validators.required],
      machineCode: [''],
      empName: ['', Validators.required],
      fathername: ['', Validators.required],
      mobileNo: ['', Validators.required],
      mobileNo2: [''],
      uid: ['', Validators.required],
      emailID: [''],
      status: [0],
      acno: [''],
      address: ['', Validators.required]
    });
  }

  get f() { return this.EmployeeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EmployeeForm.invalid) {
      return;
    }

    this.PayrollApiService.SetNewEmployee(this.EmployeeForm.value).subscribe({
      next: (res) => {
        if (res.Data == "check error log") {
          this.toastr.error('Error', 'Error In Details');
        } else {
          if (this.EmployeeForm.value.empId > 0) {
            this.toastr.success('sucesss', 'Data Updated Successfully!!');
          }
          else {
            this.toastr.success('sucesss', 'Data Save Successfully!!');
          }
        }
      }, error: () => {
        this.toastr.error('Error', 'Error In Details');
      }, complete: () => {
        this.submitted = false;
        this.PageLoad();
        this.EditData();
      },
    });
  }

  EditEmployee(EmpDetails) {
    this.EmployeeForm = this.formBuilder.group({
      empId: [EmpDetails.empId],
      empRegNo: [EmpDetails.empRegNo],
      machineCode: [EmpDetails.m_code],
      empName: [EmpDetails.empName],
      fathername: [EmpDetails.fathername],
      mobileNo: [EmpDetails.mobileNo],
      mobileNo2: [EmpDetails.mobileNo2],
      uid: [EmpDetails.uid],
      emailID: [EmpDetails.emailID],
      acno: [EmpDetails.acno],
      address: [EmpDetails.address]
    });
    this.topFunction();
  }

  onReset() {
    this.submitted = false;
    this.advancedsubmitted = false;
    this.EmployeeForm.reset();
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
