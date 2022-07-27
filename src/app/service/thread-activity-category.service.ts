import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertThreadActivityCategoryReq } from "../dto/thread-activity-category/insert-thread-activity-category-req";
import { ShowThreadActivityCategories } from "../dto/thread-activity-category/show-thread-activity-categories";
import { UpdateThreadActivityCategory } from "../dto/thread-activity-category/update-thread-activity-category-req";
import { ShowThreadActivityById } from "../dto/thread-activity/show-thread-activity-by-id";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class ThreadActivityCategoryService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowThreadActivityCategories> {
        return this.http.get<ShowThreadActivityCategories>(`http://localhost:1221/thread-activity-categories`)
    }

    getById(id : number) : Observable<ShowThreadActivityById> {
        return this.http.get<ShowThreadActivityById>(`http://localhost:1221/thread-activity-categories/${id}`)
    }

    insert(data : InsertThreadActivityCategoryReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/thread-activity-categories`, data)
    }

    update(data : UpdateThreadActivityCategory) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/thread-activity-categories`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/thread-activity-categories/${id}`)
    }
}