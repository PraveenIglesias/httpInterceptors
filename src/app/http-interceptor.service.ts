import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GeneralApiService } from './general-api.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authentication: `Bearer 123123123`
      }
    });

    return next.handle(req).do((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse){
        // do studd with response...
        console.log(event.body);
      }
    }, err => {
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401) {
          alert("Unauthorized user");
        }
      }
    });
  }


}
