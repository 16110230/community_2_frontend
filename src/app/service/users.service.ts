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
import { UpdatePasswordReq } from "../dto/users/update-password-req";
import { UpdateUserReq } from "../dto/users/update-user-req";
import { VerificationReqDto } from "../dto/verification-req-dto";
import { VerificationResDto } from "../dto/verification-res-dto";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowUsers> {
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

    getUserProfile(): Observable<ShowUserById> {
        return this.http.get<ShowUserById>(`${BASE_URL}/users/profile`)
    }

    getAllWithPagination(startPage: number, maxPage: number, query?: string): Observable<ShowUsers> {
        return this.http.get<ShowUsers>(`${BASE_URL}/users?startPage=${startPage}&maxPage=${maxPage}`)
    }

    changePassword(data: UpdatePasswordReq): Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/users/change-password`, data)
    }

    verification(data: VerificationReqDto): Observable<VerificationResDto> {
        return this.http.post<VerificationResDto>(`${BASE_URL}/users/verification`, data)
    }
}