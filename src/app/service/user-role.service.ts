import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";
import { InsertUserRoleReq } from "../dto/user-role/insert-user-role-req";
import { ShowUserRoleById } from "../dto/user-role/show-user-role-by-id";
import { ShowUserRoles } from "../dto/user-role/show-user-roles";
import { UpdateUserRoleReq } from "../dto/user-role/update-user-role-req";

@Injectable({
    providedIn : 'root'
})
export class UserRoleService {
    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowUserRoles> {
        return this.http.get<ShowUserRoles>(`http://localhost:1221/user-roles`)
    }

    getById(id : number) : Observable<ShowUserRoleById> {
        return this.http.get<ShowUserRoleById>(`http://localhost:1221/user-roles/${id}`)
    }

    insert(data : InsertUserRoleReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221/user-roles`, data)
    }

    update(data : UpdateUserRoleReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/user-roles`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/user-roles/${id}`)
    }
}