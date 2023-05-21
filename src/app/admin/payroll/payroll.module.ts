import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { EmployeeMasterComponent } from './components/employee-master/employee-master.component';
import { BankSettingComponent } from './components/bank-setting/bank-setting.component';
import { EmployeeSalaryComponent } from './components/employee-salary/employee-salary.component';
import { DailyAttendanceMasterComponent } from './components/daily-attendance-master/daily-attendance-master.component';
import { EmployeeMonthlyAttendanceComponent } from './components/employee-monthly-attendance/employee-monthly-attendance.component';
import { LoanMasterComponent } from './components/loan-master/loan-master.component';
import { MonthlySalaryGenerateComponent } from './components/monthly-salary-generate/monthly-salary-generate.component';
import { BankSalaryGenerateComponent } from './components/bank-salary-generate/bank-salary-generate.component';
import { BounsBreakfastSheetComponent } from './components/bouns-breakfast-sheet/bouns-breakfast-sheet.component';
import { PaidSalaryToEmployeeComponent } from './components/paid-salary-to-employee/paid-salary-to-employee.component';
import { ImportItemComponent } from './components/import-item/import-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { NgxCkeditorModule } from 'ngx-ckeditor4';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { CoreModule } from 'src/app/core/core.module';
import { PayrollComponent } from './components/payroll/payroll.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    EmployeeMasterComponent,
    BankSettingComponent,
    EmployeeSalaryComponent,
    DailyAttendanceMasterComponent,
    EmployeeMonthlyAttendanceComponent,
    LoanMasterComponent,
    MonthlySalaryGenerateComponent,
    BankSalaryGenerateComponent,
    BounsBreakfastSheetComponent,
    PaidSalaryToEmployeeComponent,
    ImportItemComponent,
    PayrollComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    PayrollRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    LMarkdownEditorModule,
    NgxCkeditorModule.forRoot({
      url: 'https://cdn.bootcss.com/ckeditor/4.11.3/ckeditor.js',
    }),
    ImageCropperModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    ColorPickerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TagInputModule,
    NouisliderModule
  ],
  providers: [],
})
export class PayrollModule {}
