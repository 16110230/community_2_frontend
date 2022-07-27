import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { DeleteResDto } from "../dto/delete-res-dto"
import { InsertResDto } from "../dto/insert-res-dto"
import { InsertThreadActivityReq } from "../dto/thread-activity/insert-thread-activity-req"
import { ShowThreadActivities } from "../dto/thread-activity/show-thread-activities"
import { ShowThreadActivityById } from "../dto/thread-activity/show-thread-activity-by-id"
import { UpdateThreadActivityReq } from "../dto/thread-activity/update-thread-activity-req"
import { UpdateResDto } from "../dto/update-res-dto"

@Injectable({
    providedIn : 'root'
})
export class ThreadActivityService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowThreadActivities> {
        return this.http.get<ShowThreadActivities>(`http://localhost:1221/thread-activities`)
    }

    getById(id : number) : Observable<ShowThreadActivityById> {
        return this.http.get<ShowThreadActivityById>(`http://localhost:1221/thread-activities/${id}`)
    }

    insert(data : InsertThreadActivityReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/thread-activities`, data)
    }

    update(data : UpdateThreadActivityReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/thread-activities`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/thread-activities/${id}`)
    }
}