import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";
import { InsertUserReq } from "../dto/users/insert-user-req";
import { ShowUserById } from "../dto/users/show-user-by-id";
import { ShowUsers } from "../dto/users/show-users";
import { UpdateUserReq } from "../dto/users/update-user-req";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getAll(startPage: number, maxPage: number, query?: string): Observable<ShowUsers> {
        return this.http.get<ShowUsers>(`${BASE_URL}/users`)
    }

    getById(id: number): Observable<ShowUserById> {
        return this.http.get<ShowUserById>(`${BASE_URL}/users/${id}`)
    }

    insert(data: InsertUserReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/users`, data)
    }

    update(data: UpdateUserReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/users/update`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/users/delete/${id}`)
    }
}