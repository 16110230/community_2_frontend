import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { ShowPollingDetails } from "../dto/polling/show-polling-details";

@Injectable({
    providedIn : 'root'
})
export class PollingDetailService{

    constructor(private http : HttpClient) {}

    getById(id : number) : Observable<ShowPollingDetails> {
        return this.http.get<ShowPollingDetails>(`${BASE_URL}/polling-details/${id}`)
    }

}