import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";
import { InsertUserRoleReq } from "../dto/user-role/insert-user-role-req";
import { ShowUserRoleById } from "../dto/user-role/show-user-role-by-id";
import { ShowUserRoles } from "../dto/user-role/show-user-roles";
import { UpdateUserRoleReq } from "../dto/user-role/update-user-role-req";

@Injectable({
    providedIn: 'root'
})
export class UserRoleService {
    constructor(private http: HttpClient) { }

    getAll(startPage: number, maxPage: number, query?: string): Observable<ShowUserRoles> {
        return this.http.get<ShowUserRoles>(`${BASE_URL}/user-roles`)
    }

    getById(id: number): Observable<ShowUserRoleById> {
        return this.http.get<ShowUserRoleById>(`${BASE_URL}/user-roles/${id}`)
    }

    insert(data: InsertUserRoleReq): Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/user-roles`, data)
    }

    update(data: UpdateUserRoleReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/user-roles`, data)
    }

    delete(id: number): Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/user-roles/${id}`)
    }
}