import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  // We only need to intercept calls to the API
  const isCallToApi = req.url.startsWith('http://localhost:8080/api/v1');
  // Only if user is logged in, then add auth header with basic auth credentials
  if(isCallToApi && authService.isLoggedIn()){
    const user = authService.getLoggedInUser();
    //   Overwrite intercepted request with clone + Authorization header
    req = req.clone({
      setHeaders: {Authorization: 'Basic ' + user.basicAuthToken}
    });
  }
  return next(req);
};
