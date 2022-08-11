import { formatDate } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { ShowActivities } from "src/app/dto/activity/show-activities";
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";
import { ActivityService } from "src/app/service/activity.service";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-activity",
    templateUrl: "./activity-detail.component.html"
})
export class MemberProfileActivityDetailComponent {

    constructor(
        private router: Router,
        private userService: UsersService,
        private activityService: ActivityService,
        private activityInvoiceService: ActivityInvoiceService,
        private activateRoute: ActivatedRoute
    ) { }

    startDate! : string
    endDate! : string
    idParam! : string
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

    startpage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    activities: ShowActivities = { data: [] }
    activitySub?: Subscription

    ngOnInit() {
        this.inidData()
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

    getData(startPage: number = this.startpage, maxPage: number = this.maxPage, query?: string): void {
        this.loading = true;
        this.startpage = startPage
        this.maxPage = maxPage

        this.activitySub = this.activityService.getAllByUserId(startPage, maxPage).subscribe(
            result => {
                const resultData: any = result
                this.activities.data = resultData.data
                this.loading = false
                this.totalData = resultData.countData
                console.log(this.activities)
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
    download(startDate: string, endDate: string) {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            const startDateFormated = formatDate(this.startDate, `yyyy-MM-dd`, "en")
            const endDateFormated = formatDate(this.endDate, `yyyy-MM-dd`, "en")
            
            this.activityInvoiceService.getReport(this.idParam, startDateFormated , endDateFormated).subscribe()
        })
    }
}