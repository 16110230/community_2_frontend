import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { BASE_URL } from "../constant/constant"
import { DeleteResDto } from "../dto/delete-res-dto"
import { InsertResDto } from "../dto/insert-res-dto"
import { UpdateResDto } from "../dto/update-res-dto"
import { InsertUserPolling } from "../dto/user-polling/insert-user-polling"
import { ShowUserPollingById } from "../dto/user-polling/show-user-polling-by-id"
import { ShowUserPollings } from "../dto/user-polling/show-user-pollings"

@Injectable({
    providedIn : 'root'
})
export class UserPollingService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowUserPollings> {
        return this.http.get<ShowUserPollings>(`${BASE_URL}/user-pollings`)
    }

    getById(id : number) : Observable<ShowUserPollingById> {
        return this.http.get<ShowUserPollingById>(`${BASE_URL}/user-pollings/${id}`)
    }

    insert(data : InsertUserPolling) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/user-pollings`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/user-pollings/${id}`)
    }
}