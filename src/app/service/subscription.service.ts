import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { InsertSubscriptionReq } from "../dto/subscription/insert-subscription.req";
import { ShowSubscriptionById } from "../dto/subscription/show-subscription-by-id";
import { ShowSubscriptions } from "../dto/subscription/show-subscriptions";
import { UpdateSubscriptionReq } from "../dto/subscription/update-subscription-req";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class SubscriptionService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowSubscriptions> {
        return this.http.get<ShowSubscriptions>(`${BASE_URL}/subscriptions`)
    }

    getById(id : number) : Observable<ShowSubscriptionById> {
        return this.http.get<ShowSubscriptionById>(`${BASE_URL}/subscriptions/${id}`)
    }

    insert(data : InsertSubscriptionReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/subscriptions`, data)
    }

    update(data : UpdateSubscriptionReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/subscriptions`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/subscriptions/${id}`)
    }
}