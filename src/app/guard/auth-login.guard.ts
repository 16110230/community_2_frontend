import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ADMIN, MEMBER } from "../constant/constant";
import { LoginService } from "../service/login.service"; 

@Injectable({
    providedIn : 'root'
})

export class AuthLoginGuard implements CanLoad {
    constructor(private loginService : LoginService, private router : Router) {}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(this.loginService.getData()?.data.roleCode === ADMIN){
            this.router.navigateByUrl('/admin') 
            return false
        } else if(this.loginService.getData()?.data.roleCode === MEMBER) {
            this.router.navigateByUrl('/')
            return false
        } else {
            return true
       }
    }

}