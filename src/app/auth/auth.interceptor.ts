import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject services
  const authService: AuthService = inject(AuthService);
  // We only need to intercept calls to the API
  const isCallToApi = req.url.startsWith('http://localhost:8080/api/v1');
  // Only if user is logged in, then add auth header with basic auth credentials
  return next(req);
};
