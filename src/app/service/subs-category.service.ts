import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertSubsCaregoryReq } from "../dto/subs-category/insert-subs-category-req";
import { ShowSubsCategories } from "../dto/subs-category/show-subs-categories";
import { ShowSubsCategoryById } from "../dto/subs-category/show-subs-category-by-id";
import { UpdateSubsCategoryReq } from "../dto/subs-category/update-subs-category-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class SubsCategoryService{
    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowSubsCategories> {
        return this.http.get<ShowSubsCategories>(`${BASE_URL}/subscription-categories`)
    }

    getById(id : number) : Observable<ShowSubsCategoryById> {
        return this.http.get<ShowSubsCategoryById>(`${BASE_URL}/subscription-categories/${id}`)
    }

    insert(data : InsertSubsCaregoryReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/subscription-categories`, data)
    }

    update(data : UpdateSubsCategoryReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/subscription-categories`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/subscription-categories/${id}`)
    }
}