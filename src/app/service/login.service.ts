import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { LoginReqDto } from "../dto/login-req-dto"
import { LoginResDto } from "../dto/login-res-dto"

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http : HttpClient){}

    login(data : LoginReqDto) : Observable<LoginResDto> {
        return this.http.post<LoginResDto>('http://localhost:1221/login', data)
    }

    saveData(data : LoginResDto) : void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getData() : LoginResDto | null {
        const data = localStorage.getItem('data')
        if (data) {
            return JSON.parse(data)
        } return null
    }

    getToken() : string | null {
        const data = localStorage.getItem('data')
        if (data) {
            const login : LoginResDto = JSON.parse(data)
            return login.data.token
        } return null
    }

    getRole(): string | null {
        const data = this.getData()?.data.roleCode
        if(data){
            return data
        }
        return null
    }
}