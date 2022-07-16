import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ApiEndpoints } from 'src/app/core/constant';
import { User } from 'src/app/core/model/Auth.model';
import { ResponseHelper } from 'src/app/core/model/response.model';
import { SessionService } from 'src/app/core/services/session/session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject!: BehaviorSubject<User|null>;
  public user!: Observable<User | null>;
  constructor(
    private sessionService:SessionService,
    private http:HttpClient,
    private router:Router) {
    this.userSubject = new BehaviorSubject<User | null>(this.getToken());
    this.user = this.userSubject.asObservable();
    console.log("AuthService constructor")
  }

  private getToken(){
    const item = this.sessionService.getUserAuthToken();
    return  item ? <User>JSON.parse(item):null;
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  public login(email: string, password: string,rememberMe:boolean) {
    return this.http.post<ResponseHelper<User>>(`${environment.apiUrl}/${ApiEndpoints.LOGIN}`, { email, password })
        .pipe(map(response => {
            // store user details and jwt token in cookies to keep user logged in between page refreshes
            this.sessionService.addUserAuthToken(response.data,!rememberMe);
            this.userSubject.next(response.data);
            return response;
        }));
  }

  public logout() {
    // remove user from local storage to log user out
    this.sessionService.removeUserAuthToken();
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

}
