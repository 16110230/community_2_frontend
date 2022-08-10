import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { UpdateResDto } from "../dto/update-res-dto";
import { BASE_URL } from "../constant/constant";

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    constructor(private httpClient : HttpClient) {}

    logout = () : Observable<UpdateResDto> => {
        return this.httpClient.patch<UpdateResDto>(`${BASE_URL}/logout`, {})
    }
}