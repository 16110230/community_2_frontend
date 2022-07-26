import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";
import { InsertUserReq } from "../dto/users/insert-user-req";
import { ShowUserById } from "../dto/users/show-user-by-id";
import { ShowUsers } from "../dto/users/show-users";
import { UpdateUserReq } from "../dto/users/update-user-req";

@Injectable({
    providedIn : 'root'
})
export class UsersService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowUsers> {
        return this.http.get<ShowUsers>(`http://localhost:1221/users`)
    }

    getById(id : number) : Observable<ShowUserById> {
        return this.http.get<ShowUserById>(`http://localhost:1221/users/${id}`)
    }

    insert(data : InsertUserReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`http://localhost:1221`, data)
    }

    update(data : UpdateUserReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`http://localhost:1221/users`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`http://localhost:1221/users/${id}`)
    }
}