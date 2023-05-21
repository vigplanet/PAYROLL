import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { PayrollService } from 'src/app/services/_payroll.service';

@Component({
  selector: 'ico-loan-master',
  templateUrl: './loan-master.component.html',
  styleUrls: ['./loan-master.component.scss']
})
export class LoanMasterComponent implements OnInit {
  EmpList = [];
  LoanList = [];
  loanForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, public PayrollApiService: PayrollService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.PageLoad();

    this.EmpList = [];
    this.PayrollApiService.GetEmpList().subscribe({
      next: (res: any) => {
        this.EmpList = res.results.employeeListModel;
      }
    });

    this.FillGrid(0, 0);
  }

  FillGrid(Empid, loanid) {
    this.PayrollApiService.GetLoanMaster(Empid, loanid).subscribe((data: any) => {
      this.LoanList = data.results.empLoanMasterInput;
    });
  }

  EditData(LoanDetail) {
    this.loanForm = this.formBuilder.group({
      empRegNo: [LoanDetail.empRegNo, Validators.required],
      empName: [LoanDetail.empName, Validators.required],
      acno: [LoanDetail.acno, Validators.required],
      loanId: [LoanDetail.loanId, Validators.required],
      empID: [LoanDetail.empID, Validators.required],
      loanDate: [LoanDetail.loanDate, Validators.required],
      loanAmt: [LoanDetail.loanAmt, Validators.required],
      emiAmt: [LoanDetail.emiAmt, Validators.required],
      loanStatus: [LoanDetail.loanStatus, Validators.required],
      status: [LoanDetail.status, Validators.required]
    });
  }

  PageLoad() {
    this.loanForm = this.formBuilder.group({
      empRegNo: ['0202', Validators.required],
      empName: ['ABCD', Validators.required],
      acno: ['5151518', Validators.required],
      loanId: [0, Validators.required],
      empID: [0, Validators.required],
      loanDate: [moment().format('yyyy-MM-DD'), Validators.required],
      loanAmt: [0, Validators.required],
      emiAmt: [0, Validators.required],
      loanStatus: ['Pending', Validators.required],
      status: [1, Validators.required]
    });
  }
  get f() { return this.loanForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loanForm.invalid) {
      return;
    }

    this.PayrollApiService.SetLoanMaster(this.loanForm.value).subscribe({
      next: (res) => {
        if (res.Data == "check error log") {
          this.toastr.error('Error', 'Error In Details');
        } else {
          if (this.loanForm.value.loanId > 0) {
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
        this.FillGrid(0, 0);
      },
    });

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loanForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.loanForm.reset();
  }

}
