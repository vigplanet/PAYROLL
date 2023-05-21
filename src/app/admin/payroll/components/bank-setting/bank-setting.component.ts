import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PayrollService } from 'src/app/services/_payroll.service';

@Component({
  selector: 'ico-bank-setting',
  templateUrl: './bank-setting.component.html',
  styleUrls: ['./bank-setting.component.scss']
})
export class BankSettingComponent implements OnInit {
  BankSettingList = [];

  BankSettingForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public PayrollApiService: PayrollService, private toastr: ToastrService) { }

  ngOnInit(): void {   
    this.EditData();
    this.PageLoad();
  }

  PageLoad() {
    this.BankSettingForm = this.formBuilder.group({
      bankID: [0, Validators.required],
      bankName: ['', Validators.required],
      branchName: ['', Validators.required],
      esivalue: [0, Validators.required],
      esiPer: [0, Validators.required],
      status: [1, Validators.required]
    });
  }

  EditData() {
    this.BankSettingList = [];
    this.PayrollApiService.GetBankSetting().subscribe({
      next: (res: any) => {
        this.BankSettingList = res.results._SetBankSetting;
      }
    });
  }

  get f() { return this.BankSettingForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.BankSettingForm.invalid) {
      return;
    }

    this.PayrollApiService.SetBankSetting(this.BankSettingForm.value).subscribe({
      next: (res) => {
        if (res.Data == "check error log") {
          this.toastr.error('Error', 'Error In Details');
        } else {
          if (this.BankSettingForm.value.bankID > 0) {
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
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.banksettingform.value, null, 4));
  }

  EditBankSetting(BankDetail) {
    this.BankSettingForm = this.formBuilder.group({
      bankID: [BankDetail.bankID, Validators.required],
      bankName: [BankDetail.bankName, Validators.required],
      branchName: [BankDetail.branchName, Validators.required],
      esivalue: [BankDetail.esivalue, Validators.required],
      esiPer: [BankDetail.esiPer, Validators.required],
      status: [BankDetail.status, Validators.required]
    });
    this.topFunction();
  }

  onReset() {
    this.submitted = false;
    this.BankSettingForm.clearValidators();
  }
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
