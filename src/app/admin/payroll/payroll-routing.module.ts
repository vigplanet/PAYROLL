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
import { PayrollComponent } from './components/payroll/payroll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PayrollComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'employee-master',
        component: EmployeeMasterComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'bank-setting',
        component: BankSettingComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'employee-salary',
        component: EmployeeSalaryComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'daily-attendance-master',
        component: DailyAttendanceMasterComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'loan-master',
        component: LoanMasterComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'employee-monthly-attendance',
        component: EmployeeMonthlyAttendanceComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'monthly-salary-generate',
        component: MonthlySalaryGenerateComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'bank-salary-generate',
        component: BankSalaryGenerateComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'bouns-breakfast-sheet',
        component: BounsBreakfastSheetComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'paid-salary-to-employee',
        component: PaidSalaryToEmployeeComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'import-item',
        component: ImportItemComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayrollRoutingModule {}
