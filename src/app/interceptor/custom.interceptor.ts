import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { MessageService } from "primeng/api"
import { Observable, tap } from "rxjs"
import { LoginService } from "../service/login.service"

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    constructor(private loginService : LoginService, private router : Router, private messageService : MessageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let reqClone = req
        const isLoginReq = req.url.includes('login')

        if (!isLoginReq) {
            reqClone = req.clone({
                setHeaders : {
                    Authorization : 'Bearer ' + this.loginService.getToken()
                }
            })
        }
        return next.handle(reqClone).pipe(tap({
            next : result => {
                if (result instanceof HttpResponse) {
                    if(result.body.message){
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: result.body.message,
                            life: 2000
                        })
                    }
                }
            },
            error : result => {
                if (result instanceof HttpErrorResponse) {
                    this.messageService.add({
                        severity: 'error',
                        detail: result.error.message,
                        life: 2000
                    })
                    if(result.status == 401) {
                        if(!isLoginReq){
                            localStorage.clear()
                            this.router.navigateByUrl('/login')
                        }

                        localStorage.clear()
                    }
                }
            }
        }))
    }
}