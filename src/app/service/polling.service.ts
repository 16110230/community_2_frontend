import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertPollingHdrReq } from "../dto/polling/insert-polling-hdr-req";
import { ShowPollingById } from "../dto/polling/show-polling-by-id";
import { ShowPollingHeaders } from "../dto/polling/show-polling-headers";

@Injectable({
    providedIn : 'root'
})
export class PollingService{
    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowPollingHeaders> {
        return this.http.get<ShowPollingHeaders>(`${BASE_URL}/pollings`)
    }

    getById(id : number) : Observable<ShowPollingById> {
        return this.http.get<ShowPollingById>(`${BASE_URL}/pollings/${id}`)
    }

    insert(data : InsertPollingHdrReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/pollings`, data)
    }
}