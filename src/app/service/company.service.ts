import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertCompanyReq } from "../dto/company/insert-company-req";
import { ShowCompanies } from "../dto/company/show-companies";
import { ShowCompanyById } from "../dto/company/show-company-by-id";
import { UpdateCompanyReq } from "../dto/company/update-company-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    constructor(private http: HttpClient) { }

    getAll(startPage: number, maxPage: number, query?: string): Observable<ShowCompanies> {
        return this.http.get<ShowCompanies>(`${BASE_URL}/companies`)
    }

    getById(id: number): Observable<ShowCompanyById> {
        return this.http.get<ShowCompanyById>(`${BASE_URL}/companies/${id}`)
    }

    insert(data: InsertCompanyReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/companies`, data)
    }

    update(data: UpdateCompanyReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/companies`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/companies/${id}`)
    }
}