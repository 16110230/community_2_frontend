import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MEMBER } from "../constant/constant";
import { LoginService } from "../service/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthMemberGuard implements CanLoad {
    constructor(private loginService : LoginService, private router : Router) {}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.loginService.getData()){
            if(this.loginService.getData()?.data.roleCode === MEMBER) {
                return true
            } 
        } 
        this.router.navigateByUrl('/forbidden-page')
        return false
    }
}