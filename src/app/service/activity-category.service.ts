import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertActivityCategoryReq } from "../dto/activity-category/insert-activity-category-req";
import { ShowActivityCategories } from "../dto/activity-category/show-activity-categories";
import { ShowActivityCategoryById } from "../dto/activity-category/show-activity-category-by-id";
import { UpdateActivityCategoryReq } from "../dto/activity-category/update-activity-category-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class ActivityCategoryService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowActivityCategories> {
        return this.http.get<ShowActivityCategories>(`${BASE_URL}/activity-categories`)
    }

    getById(id: number): Observable<ShowActivityCategoryById> {
        return this.http.get<ShowActivityCategoryById>(`${BASE_URL}/activity-categories/${id}`)
    }

    insert(data: InsertActivityCategoryReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/activity-categories`, data)
    }

    update(data: UpdateActivityCategoryReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/activity-categories`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/activity-categories/${id}`)
    }

    getAllWithPagination(startPage: number, maxPage: number, query?: string): Observable<ShowActivityCategories> {
        return this.http.get<ShowActivityCategories>(`${BASE_URL}/activity-categories?startPage=${startPage}&maxPage=${maxPage}`)
    }
}