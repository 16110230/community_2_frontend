import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
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
        return this.http.get<ShowUserPollings>(`http://localhost:1221/user-pollings`)
    }

    getById(id : number) : Observable<ShowUserPollingById> {
        return this.http.get<ShowUserPollingById>(`http://localhost:1221/user-pollings/${id}`)
    }

    insert(data : InsertUserPolling) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/user-pollings`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/user-pollings/${id}`)
    }
}