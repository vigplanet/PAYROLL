import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {

  apiUrl ='https://demo.vigplanet.com/';
  
  constructor(private http:HttpClient) {}

  GetEmpList()
  {
    return this.http.get(`${this.apiUrl}api/payroll/getEmployeeList`);
  }

  SetNewEmployee(request)
  {
    return this.http.post<any>(`${this.apiUrl}api/payroll/setNewEmployee`,request);
  }
  
  SetBankSetting(request)
  {
    return this.http.post<any>(`${this.apiUrl}api/payroll/setBankMasterSetting`,request);
  }

  GetBankSetting()
  {
    return this.http.get(`${this.apiUrl}api/payroll/gettBankMasterSetting`);
  }

  SetEmployeeSalarySetting(request)
  {
    return this.http.post<any>(`${this.apiUrl}api/payroll/setmployeeSalarySetting`,request);
  }

  GetEmployeeSalarySetting(empid:any)
  {
    return this.http.get(`${this.apiUrl}api/payroll/getEmployeeSalarySettingList?empid=`+empid);
  }

  SetLoanMaster(request)
  {
    return this.http.post<any>(`${this.apiUrl}api/payroll/setLoanMaster`,request);
  } 
  
  GetLoanMaster(empid,loanid)
  {
    return this.http.get(`${this.apiUrl}api/payroll/getLoanMaster?empid=`+empid+`&loanid=`+loanid);
  }
}
