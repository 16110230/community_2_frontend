import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-activity",
    templateUrl: "./activity.component.html"
})
export class MemberProfileActivityComponent {

    constructor(
        private router: Router,
        private userService: UsersService,
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

    // loadData(event: LazyLoadEvent) {
    //     this.getData(event.first, event.rows, event.globalFilter)
    // }

    // getData(startPage: number = this.invoiceStartpage, maxPage: number = this.invoiceMaxPage, query?: string): void {
    //     this.invoiceLoading = true;
    //     this.invoiceStartpage = startPage
    //     this.invoiceMaxPage = maxPage

    //     this.invoiceSub = this.activityInvoice.getByIdUserId(startPage, maxPage).subscribe(
    //         result => {
    //             const resultData: any = result
    //             this.invoices.data = resultData.data
    //             this.invoiceLoading = false
    //             this.invoiceTotalData = resultData.count
    //         },
    //     )
    // }


    goToEditProfile() {
        this.router.navigateByUrl('/home/profiles/edit')
    }
    goToTransaction() {
        this.router.navigateByUrl('/home/profiles/transaction')
    }
    goToActivity() {
        this.router.navigateByUrl('/home/profiles/activity')
    }
}