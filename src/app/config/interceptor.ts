import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = sessionStorage.getItem('token')
        console.log(`token:${token}`)
        const xhr = req.clone({
            headers: req.headers
            .set('X-Requested-With', 'XMLHttpRequest')
            .set('Accept', 'application/json;charset=utf-8')
            .set('Content-Type', 'application/json;charset=utf-8')
            .set('Authorization',`Bearer ${token}`)
        });
        return next.handle(xhr);
    }
}