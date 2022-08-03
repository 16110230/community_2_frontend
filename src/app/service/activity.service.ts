import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertActivityReq } from "../dto/activity/insert-activity-req";
import { ShowActivities } from "../dto/activity/show-activities";
import { ShowActivityById } from "../dto/activity/show-activity-by-id";
import { UpdateActivityReq } from "../dto/activity/update-activity-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class ActivityService{
    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowActivities> {
        return this.http.get<ShowActivities>(`${BASE_URL}/activities`)
    }

    getById(id : string) : Observable<ShowActivityById> {
        return this.http.get<ShowActivityById>(`${BASE_URL}/activities/${id}`)
    }

    insert(data : InsertActivityReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/activities`, data)
    }

    update(data : UpdateActivityReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/activities`, data)
    }

    delete(id : string) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/activities/${id}`)
    }
}