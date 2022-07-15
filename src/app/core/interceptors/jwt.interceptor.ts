import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session/session.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private sessionService:SessionService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Here intercept request and add token into header of the http request
    const isApiCall: boolean = request.url.startsWith(environment.apiUrl);
    if (this.authService.isAuthenticated() && isApiCall) {
      let token = this.authService.getAgentLoginAsClientFlag() ? this.authService.getClientAuthToken() :  this.sessionService.getUserAuthToken();
      token = token || '';
      // Set Authorization Headaer
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
