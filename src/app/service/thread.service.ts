import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertThreadReq } from "../dto/thread/insert-thread-req";
import { ShowThreadById } from "../dto/thread/show-thread-by-id";
import { ShowThreads } from "../dto/thread/show-threads";
import { UpdateThreadReq } from "../dto/thread/update-thread-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class ThreadService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowThreads> {
        return this.http.get<ShowThreads>(`http://localhost:1221/threads`)
    }

    getById(id : number) : Observable<ShowThreadById> {
        return this.http.get<ShowThreadById>(`http://localhost:1221/threads/${id}`)
    }

    insert(data : InsertThreadReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/threads`, data)
    }

    update(data : UpdateThreadReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/threads`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/threads/${id}`)
    }
}