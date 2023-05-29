import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constant';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageServices: StorageService,
    private router: Router
    ) { }

    userData$ = new BehaviorSubject<any>('');

    getUserData(){
      this.storageServices.get(AuthConstants.AUTH).then(res=>{
        this.userData$.next(res)
      })
    }

    login(postData: any): Observable<any>{
      return this.httpService.post('login', postData)
    }

    signup(postData: any): Observable<any>{
      return this.httpService.post('signup', postData)
    }

    loginout(){
      this.storageServices.removeItem(AuthConstants.AUTH).then(res =>{
        this.userData$.next('');
        this.router.navigate(['']);
      })
    }

    fetchMember(): Observable<any>{
      return this.httpService.get('all-shares');
    }

    fetchAllmember(): Observable<any>{
      return this.httpService.get('members');
    }

    insertFees(postData: any): Observable<any>{
      return this.httpService.post('insertfees', postData);
    }

    insertLoan(postData: any): Observable<any>{
      return this.httpService.post('insertloan', postData);
    }

    loanApplicanForm(postData: any): Observable<any>{
      return this.httpService.post('loan-form', postData);
    }

    getNormalLoan(postData: any): Observable<any>{
      return this.httpService.post('normal-loan', postData)
    }

    getLoanDetails(postData: any): Observable<any>{
      return this.httpService.post('filter-loan-details', postData)
    }


    getEmergencyLoan(postData: any): Observable<any>{
      return this.httpService.post('emergency-loan', postData)
    }

    getMemberShares(userId: any): Observable<any>{
      return this.httpService.post('membershare', userId);
    }

    getAllShares(): Observable<any>{
          return this.httpService.get('shares');
    }

    getSubmitedFormCount(postData: any): Observable<any>{
      return this.httpService.post('all-loan-request', postData);
    }

    getSubmitedFormDetails(postData: any): Observable<any>{
      return this.httpService.post('all-loan', postData);
    }

    getVotedLoan(postData: any): Observable<any>{
      return this.httpService.post('voted-loan', postData);
    }

    getAccountNames(): Observable<any>{
      return this.httpService.get('account-type');
    }

    insertVote(postData: any):Observable<any>{
       return this.httpService.post('voting', postData);
    }

    approveForm(postData: any):Observable<any>{
      return this.httpService.post('approve-form', postData);
   }

   collectionReport(postData: any):Observable<any>{
    return this.httpService.post('collection-report', postData);
 }

   filterReport(postData: any):Observable<any>{
  return this.httpService.post('collection-report-filter', postData);
}

feesDepositsList():Observable<any>{
  return this.httpService.get('fees-deposts-list');
}

loanDepositsList():Observable<any>{
  return this.httpService.get('loan-deposts-list');
}

approveFees(postData: any):Observable<any>{
  return this.httpService.post('approve-fee', postData);
}

approveLoanDeposit(postData: any):Observable<any>{
  return this.httpService.post('approve-loan-deposit', postData);
}

changePassword(postData:any):Observable<any>{
  return this.httpService.post('change-password', postData)
}
}
