import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { PayrollService } from 'src/app/services/_payroll.service';
import { SalaryIncrementComponent } from '../salary-increment/salary-increment.component';

@Component({
  selector: 'ico-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss']
})
export class EmployeeSalaryComponent implements OnInit {
  EmpList = [];
  EditEmpSalary = [];
  EmployeeSalary: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private ADDSalaryIncrement: NgbModal, public PayrollApiService: PayrollService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.PageLoad();
    this.EditData(0);

    this.EmpList = [];
    this.PayrollApiService.GetEmpList().subscribe({
      next: (res: any) => {
        this.EmpList = res.results.employeeListModel;
      }
    });
  }

  AddSalaryIncrement() {
    this.ADDSalaryIncrement.open(SalaryIncrementComponent);
  }
  PageLoad() {
    this.EmployeeSalary = this.formBuilder.group({
      empID: [0, Validators.required],
      officetimeStart: [moment().format('HH:mm'), Validators.required],
      officetimeEnd: [moment().format('HH:mm'), Validators.required],
      totalWorkingHours: [0, Validators.required],
      totalMonthlySalary: [0, Validators.required],
      perHoursSalary: [0, Validators.required],
      lateDeductionHours: [0, Validators.required],
      lunchtimeStart: [moment().format('HH:mm'), Validators.required],
      lunchtimeEnd: [moment().format('HH:mm'), Validators.required],
      totalLunchHours: [0, Validators.required],
      sundayFilldayHours: [0, Validators.required],
      sundayFilldaySalary: [0, Validators.required],
      extraAmountBefore_after_time: [0, Validators.required],
      status: [1],
      banksalary: [0, Validators.required],
      officelatetime: [moment().format('HH:mm'), Validators.required],
      bonusMonth: [0, Validators.required],
      ded_BonusLV: [0, Validators.required]
    });
  }

  get f() { return this.EmployeeSalary.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.EmployeeSalary.invalid) {
      return;
    }

    this.PayrollApiService.SetEmployeeSalarySetting(this.EmployeeSalary.value).subscribe({
      next: (res) => {
        if (res.Data == "check error log") {
          this.toastr.error('Error', 'Error In Details');
        } else {
          if (this.EmployeeSalary.value.empId > 0) {
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
        //this.EditData();
      },
    });

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.EmployeeSalary.value, null, 4));
  }

  EditData(Empid) {
    if (Empid != null) {
      this.PayrollApiService.GetEmployeeSalarySetting(Empid).subscribe((data: any) => {
        this.EditEmpSalary = data.results.employeeSalarySettingList;
        if (data.results.status == "Success" && Empid > 0) {
          this.FillData(data.results.employeeSalarySettingList[0]);
          data.results.employeeSalarySettingList;
        }
      });
    }
  }

  FillData(EmpSalaryList) {
    if (EmpSalaryList.empID > 0) {
      this.EmployeeSalary = this.formBuilder.group({
        empID: [EmpSalaryList.empID],
        officetimeStart: [EmpSalaryList.officetimeStart],
        officetimeEnd: [EmpSalaryList.officetimeEnd],
        totalWorkingHours: [EmpSalaryList.totalWorkingHours],
        totalMonthlySalary: [EmpSalaryList.totalMonthlySalary],
        perHoursSalary: [EmpSalaryList.perHoursSalary],
        lateDeductionHours: [EmpSalaryList.lateDeductionHours],
        lunchtimeStart: [EmpSalaryList.lunchtimeStart],
        lunchtimeEnd: [EmpSalaryList.lunchtimeEnd],
        totalLunchHours: [EmpSalaryList.totalLunchHours],
        sundayFilldayHours: [EmpSalaryList.sundayFilldayHours],
        sundayFilldaySalary: [EmpSalaryList.sundayFilldaySalary],
        extraAmountBefore_after_time: [EmpSalaryList.extraAmountBefore_after_time],
        status: [EmpSalaryList.status],
        banksalary: [EmpSalaryList.banksalary],
        officelatetime: [EmpSalaryList.officelatetime],
        bonusMonth: [EmpSalaryList.bonusMonth],
        ded_BonusLV: [EmpSalaryList.ded_BonusLV],
      });
    }
  }

  onReset() {
    this.submitted = false;
    //this.EmployeeSalary.reset();
    this.PageLoad();
  }

}
