import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertActyivityTypeReq } from "../dto/activity-type/insert-activity-type-req";
import { ShowActivityTypeById } from "../dto/activity-type/show-activity-type-by-id";
import { ShowActivityTypes } from "../dto/activity-type/show-activity-types";
import { UpdateActivityTypeReq } from "../dto/activity-type/update-activity-type-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class ActivityTypeService {

    constructor(private http: HttpClient) { }

    getAll(startPage: number, maxPage: number, query?: string): Observable<ShowActivityTypes> {
        return this.http.get<ShowActivityTypes>(`${BASE_URL}/activity-types`)
    }

    getById(id: number): Observable<ShowActivityTypeById> {
        return this.http.get<ShowActivityTypeById>(`${BASE_URL}/activity-types/${id}`)
    }

    insert(data: InsertActyivityTypeReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/activity-types`, data)
    }

    update(data: UpdateActivityTypeReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/activity-types`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/activity-types/${id}`)
    }
}