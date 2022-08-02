import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertThreadReq } from "../dto/thread/insert-thread-req";
import { ShowThreadById } from "../dto/thread/show-thread-by-id";
import { ShowThreads } from "../dto/thread/show-threads";
import { UpdateThreadReq } from "../dto/thread/update-thread-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn: 'root'
})
export class ThreadService {

    constructor(private http: HttpClient) { }

    getAll(startPage: number, maxPage: number, query?: string): Observable<ShowThreads> {
        return this.http.get<ShowThreads>(`${BASE_URL}/threads`)
    }

    getAllArticles(): Observable<ShowThreads> {
        return this.http.get<ShowThreads>(`${BASE_URL}/threads/article`)
    }

    getById(id: string): Observable<ShowThreadById> {
        return this.http.get<ShowThreadById>(`${BASE_URL}/threads/${id}`)
    }

    insert(data: InsertThreadReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/threads`, data)
    }

    insertArticle(data: InsertThreadReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/threads/article`, data)
    }

    update(data: UpdateThreadReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/threads`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/threads/${id}`)
    }
}