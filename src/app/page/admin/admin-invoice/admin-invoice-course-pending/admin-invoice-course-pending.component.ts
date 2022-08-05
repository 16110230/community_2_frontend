import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { COURSE } from "src/app/constant/constant";
import { ShowActivityInvoiceById } from "src/app/dto/activity-invoice/show-activity-invoice-by-id";
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { UpdateActivityInvoiceReq } from "src/app/dto/activity-invoice/update-activity-invoice-req";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";

@Component({
    selector: "app-admin-invoice-course-pending",
    templateUrl: "./admin-invoice-course-pending.component.html"
})
export class AdminInvoiceCoursePendingComponent implements OnInit {

    constructor(private activityInvoiceService : ActivityInvoiceService, private activateRoute : ActivatedRoute) {}

    imageSource = ""
    imageViewFull = false
    invoices : ShowActivityInvoices = {
        data : []
    }

    update : UpdateActivityInvoiceReq = {
        id : "",
        isApproved : false,
        version : 0
    }

    idParam! : string

    initData() : void {
        this.activityInvoiceService.getAll().subscribe(result => {
            this.invoices.data = result.data.filter(res=> {return res.activityType === COURSE })
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    onValidate(id : string) : void {
        this.idParam = id

        this.activityInvoiceService.getById(this.idParam).subscribe(res => {
            
            this.update.id = id
            this.update.isApproved = true
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.activityInvoiceService.update(this.update).subscribe(result => {
                this.initData()
            })
        })
    }

    onRejected(id : string) : void {
        this.idParam = id

        this.activityInvoiceService.getById(this.idParam).subscribe(res => {
            
            this.update.id = id
            this.update.isApproved = false
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.activityInvoiceService.update(this.update).subscribe(result => {
                this.initData()
            })
        })
    }

    viewImage(src: string) {
        this.imageViewFull = !this.imageViewFull
        this.imageSource = src
    }

    closeViewImage() {
        this.imageSource = ""
        this.imageViewFull = !this.imageViewFull
    }
}