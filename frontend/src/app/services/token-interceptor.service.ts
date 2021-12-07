import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private _userService: UserService) {}
  intercept(req: any, next: any) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this._userService.getToken(),
      },
    });
    return next.handle(tokenReq);
  }
}
