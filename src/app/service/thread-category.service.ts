import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertThreadCategoryReq } from "../dto/thread-category/insert-thread-category-req";
import { ShowThreadCategories } from "../dto/thread-category/show-thread-categories";
import { ShowThreadCategoryById } from "../dto/thread-category/show-thread-categoty-by-id";
import { UpdateThreadCategoryReq } from "../dto/thread-category/update-thread-category-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class ThreadCategoryService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowThreadCategories> {
        return this.http.get<ShowThreadCategories>(`http://localhost:1221/thread-categories`)
    }

    getById(id : number) : Observable<ShowThreadCategoryById> {
        return this.http.get<ShowThreadCategoryById>(`http://localhost:1221/thread-categories/${id}`)
    }

    insert(data : InsertThreadCategoryReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/thread-categories`, data)
    }

    update(data : UpdateThreadCategoryReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/thread-categories`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/thread-categories/${id}`)
    }
}