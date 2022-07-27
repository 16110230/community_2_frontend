import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShowUserSubscriptionById } from "../dto/usersubscription/show-user-subscription-by-id";
import { ShowUserSubscriptions } from "../dto/usersubscription/show-user-subscriptions";

@Injectable({
    providedIn : 'root'
})
export class UserSubscriptionService {

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowUserSubscriptions> {
        return this.http.get<ShowUserSubscriptions>(`http://localhost:1221/user-subscriptions`)
    }

    getById(id : number) : Observable<ShowUserSubscriptionById> {
        return this.http.get<ShowUserSubscriptionById>(`http://localhost:1221/user-subscriptions/${id}`)
    }
}