import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/constant";
import { InsertActivityInvoiceReq } from "../dto/activity-invoice/insert-activity-invoice-req";
import { ShowActivityInvoiceById } from "../dto/activity-invoice/show-activity-invoice-by-id";
import { ShowActivityInvoices } from "../dto/activity-invoice/show-activity-invoices";
import { UpdateActivityInvoiceReq } from "../dto/activity-invoice/update-activity-invoice-req";
import { DeleteResDto } from "../dto/delete-res-dto";
import { InsertResDto } from "../dto/insert-res-dto";
import { UpdateResDto } from "../dto/update-res-dto";

@Injectable({
    providedIn : 'root'
})
export class ActivityInvoiceService{

    constructor(private http : HttpClient) {}

    getAll() : Observable<ShowActivityInvoices> {
        return this.http.get<ShowActivityInvoices>(`${BASE_URL}/activity-invoices`)
    }

    getAllByType(startPage: number, maxPage: number, code : string) : Observable<ShowActivityInvoices> {
        return this.http.get<ShowActivityInvoices>(`${BASE_URL}/activity-invoices/type?code=${code}&startPage=${startPage}&maxPage=${maxPage}`)
    }

    getById(id : string) : Observable<ShowActivityInvoiceById> {
        return this.http.get<ShowActivityInvoiceById>(`${BASE_URL}/activity-invoices/${id}`)
    }

    insert(data : InsertActivityInvoiceReq) : Observable<InsertResDto> {
        return this.http.post<InsertResDto>(`${BASE_URL}/activity-invoices`, data)
    }

    update(data : UpdateActivityInvoiceReq) : Observable<UpdateResDto> {
        return this.http.put<UpdateResDto>(`${BASE_URL}/activity-invoices`, data)
    }

    delete(id : number) : Observable<DeleteResDto> {
        return this.http.delete<DeleteResDto>(`${BASE_URL}/activity-invoices/${id}`)
    }
}