import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertIndustryReq } from "../dto/industry/insert-industry-req";
import { ShowIndustries } from "../dto/industry/show-industries";
import { ShowIndustryById } from "../dto/industry/show-industry-by-id";
import { UpdateIndustryReq } from "../dto/industry/update-industry-req";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class IndustryService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowIndustries> {
        return this.http.get<ShowIndustries>(`${BASE_URL}/industries`)
    }

    getById(id: number): Observable<ShowIndustryById> {
        return this.http.get<ShowIndustryById>(`${BASE_URL}/industries/${id}`)
    }

    insert(data: InsertIndustryReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/industries`, data)
    }

    update(data: UpdateIndustryReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/industries`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/industries/${id}`)
    }

    getAllWithPagination(startPage: number, maxPage: number, query?: string): Observable<ShowIndustries> {
        return this.http.get<ShowIndustries>(`${BASE_URL}/industries`)
    }
}