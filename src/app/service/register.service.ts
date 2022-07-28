import { Injectable } from "@angular/core";
import { BASE_URL } from "../constant/constant";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { InsertRegister } from "../dto/register/insert-register";
import { RegisterRes } from "../dto/register/register-res";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor(private http : HttpClient) {}

    sendVerificationCode = (data : InsertRegister) : Observable<RegisterRes> => {
        return this.http.post<RegisterRes>(`${BASE_URL}/register`, data)
    }
}