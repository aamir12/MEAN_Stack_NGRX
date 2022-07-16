import { Injectable } from '@angular/core';
import { CookieService } from '@ngx-toolkit/cookie';
import { AppKey } from '../../constant';
import { User } from '../../model/Auth.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private cookieService: CookieService) {}

  /**
   * This function set auth token into cookie after login
   * @param sessionToken
   */
  addUserAuthToken(sessionToken: User, isOnlySession: boolean = false): void {
    let options: any = { secure: true };
    options = isOnlySession ? { ...options, expires: 0 } : options;
    this.cookieService.setItem(AppKey.USER_SESSION, JSON.stringify(sessionToken), options);
  }


  /**
   *  @returns
   */
  getUserAuthToken(): string | null {
    return this.cookieService.getItem(AppKey.USER_SESSION);
  }



  /**
   *
   * @returns
   */
  checkUserAuthToken(): boolean {
    return this.cookieService.hasItem(AppKey.USER_SESSION);
  }

    
  /**
   * remove auth token
   */
  removeUserAuthToken(): void {
    this.cookieService.removeItem(AppKey.USER_SESSION);
  }
}
