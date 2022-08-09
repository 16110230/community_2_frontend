import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-transaction",
    templateUrl: "./transaction.component.html"
})
export class MemberProfileTransactionComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private userService: UsersService,
        private activityInvoiceService: ActivityInvoiceService
    ) { }

    profSubs?: Subscription
    profilePic?: string
    user: ShowUserById = {
        data: {
            id: '',
            fullName: '',
            username: '',
            email: '',
            balance: 0,
            company: '',
            companyName: '',
            industry: '',
            industryName: '',
            position: '',
            positionName: '',
            file: '',
            isActive: false,
            version: 0,
            fileExt: '',
            fileName: ''
        }
    }

    // invoice activity
    invoiceStartpage: number = 0
    invoiceMaxPage: number = 5
    invoiceTotalData: number = 0
    invoiceLoading: boolean = true
    invoices: ShowActivityInvoices = { data: [] }
    invoiceSub?: Subscription
    //-------------------

    ngOnInit() {
        this.inidData()
        // this.getInvoiceData(this.invoiceStartpage, this.invoiceMaxPage);
    }

    ngOnDestroy() {
        this.profSubs?.unsubscribe()
    }

    inidData() {
        this.userService.getUserProfile()
            .subscribe(res => {
                this.user = res
                if (res.data.file) this.profilePic = `http://localhost:1221/files/${res.data.file}`
            })
    }

    loadData(event: LazyLoadEvent) {
        this.getData(event.first, event.rows, event.globalFilter)
    }

    getData(startPage: number = this.invoiceStartpage, maxPage: number = this.invoiceMaxPage, query?: string): void {
        this.invoiceLoading = true;
        this.invoiceStartpage = startPage
        this.invoiceMaxPage = maxPage

        this.invoiceSub = this.activityInvoiceService.getByIdUserId(startPage, maxPage).subscribe(
            result => {
                const resultData: any = result
                this.invoices.data = resultData.data
                this.invoiceLoading = false
                this.invoiceTotalData = resultData.countData
            },
        )
    }

    goToEditProfile() {
        this.router.navigateByUrl('/home/profiles/edit')
    }
    goToTransaction() {
        this.router.navigateByUrl('/home/profiles/transaction')
    }
    goToActivity() {
        this.router.navigateByUrl('/home/profiles/activity')
    }

    // invoice activity
    getInvoiceData(invoiceStartpage: number, invoiceMaxPage: number) {

        this.invoiceSub = this.activityInvoiceService.getByIdUserId(invoiceStartpage, invoiceMaxPage).subscribe(
            result => {
                const resultData: any = result
                this.invoices.data = resultData.data
                this.invoiceTotalData = resultData.count
            }
        )
    }
    //--------------------
}