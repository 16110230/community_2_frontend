import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { ShowDashboard } from "../dto/dashboard/show-dashboard";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowDashboard> {
        return this.http.get<ShowDashboard>(`${BASE_URL}/dashboard`)
    }
}