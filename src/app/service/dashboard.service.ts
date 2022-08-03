import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { ShowDashboard } from "../dto/dashboard/show-dashboard";
import { ShowThreads } from "../dto/thread/show-threads";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<ShowDashboard> {
        return this.http.get<ShowDashboard>(`${BASE_URL}/dashboard`)
    }
    
    getAllThreads(): Observable<ShowThreads> {
        return this.http.get<ShowThreads>(`${BASE_URL}/dashboard/threads`)
    }
}