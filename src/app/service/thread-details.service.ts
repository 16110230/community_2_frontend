import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/constant"
import { DeleteResDto } from "../dto/delete-res-dto"
import { InsertResDto } from "../dto/insert-res-dto"
import { InsertThreadDetailsReq } from "../dto/thread-details/insert-thread-details-req"
import { ShowThreadDetailById } from "../dto/thread-details/show-thread-detail-by-id"
import { ShowThreadDetails } from "../dto/thread-details/show-thread-details"
import { UpdateResDto } from "../dto/update-res-dto"

@Injectable({
    providedIn : 'root'
})
export class ThreadDetailsService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowThreadDetails> {
        return this.http.get<ShowThreadDetails>(`${BASE_URL}/thread-details`)
    }

    getAllByThread(id : string) : Observable<ShowThreadDetails> {
        return this.http.get<ShowThreadDetails>(`${BASE_URL}/thread-details/thread/${id}`)
    }

    getById(id : number) : Observable<ShowThreadDetailById> {
        return this.http.get<ShowThreadDetailById>(`${BASE_URL}/thread-details/${id}`)
    }

    insert(data : InsertThreadDetailsReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/thread-details`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/thread-details/${id}`)
    }
}