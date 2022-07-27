import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertActivityDetailReq } from "../dto/activity-detail/insert-activity-detail-req";
import { ShowActivityDetailById } from "../dto/activity-detail/show-activity-detail-by-id";
import { ShowActivityDetails } from "../dto/activity-detail/show-activity-details";
import { UpdateActivityDetailReq } from "../dto/activity-detail/update-activity-detail-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : "root"
})
export class ActivityDetailService{

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowActivityDetails> {
        return this.http.get<ShowActivityDetails>(`${BASE_URL}/activity-details`)
    }

    getById(id : number) : Observable<ShowActivityDetailById> {
        return this.http.get<ShowActivityDetailById>(`${BASE_URL}/activity-details/${id}`)
    }

    insert(data : InsertActivityDetailReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/activity-details`, data)
    }

    update(data : UpdateActivityDetailReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/activity-details`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/activity-details/${id}`)
    }
}