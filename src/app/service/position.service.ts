import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertPositionReq } from "../dto/position/insert-position-req";
import { ShowPositionById } from "../dto/position/show-position-by-id";
import { ShowPositions } from "../dto/position/show-positions";
import { UpdatePositionReq } from "../dto/position/update-position-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class PositionService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowPositions> {
        return this.http.get<ShowPositions>(`${BASE_URL}/positions`)
    }

    getById(id: number): Observable<ShowPositionById> {
        return this.http.get<ShowPositionById>(`${BASE_URL}/positions/${id}`)
    }

    insert(data: InsertPositionReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/positions`, data)
    }

    update(data: UpdatePositionReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/positions`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/positions/${id}`)
    }

    getAllWithPagination(startPage: number, maxPage: number, query?: string): Observable<ShowPositions> {
        return this.http.get<ShowPositions>(`${BASE_URL}/positions?startPage=${startPage}&maxPage=${maxPage}`)
    }
}