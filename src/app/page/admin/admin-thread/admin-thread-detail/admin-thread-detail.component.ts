import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreadById } from "src/app/dto/thread/show-thread-by-id";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: "app-admin-thread-detail",
    templateUrl: "./admin-thread-detail.component.html"
})
export class AdminThreadDetailComponent implements OnInit, OnDestroy {

    idParam: string = ""

    thread: ShowThreadById = {
        data: {
            id: "",
            threadTitle: "",
            threadContent: "",
            file: "",
            user: "",
            userName: "",
            threadCategory: "",
            threadCategoryName: "",
            isActive: false,
            version: 0,
            createdAt: "",
            countBookmark: 0,
            countLike: 0,
            countComment: 0,
            isLike: false,
            isBookmark: false,
            userFile: ""
        }
    }

    threadSubs?: Subscription

    constructor(
        private activateRoute: ActivatedRoute,
        private threadService: ThreadService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getData()
    }

    ngOnDestroy() {
        this.threadSubs?.unsubscribe()
    }

    getData(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp: any = result
            this.idParam = resultTemp.id

            this.threadSubs = this.threadService.getById(this.idParam).subscribe(
                result => {
                    const resultData: any = result
                    this.thread.data = resultData.data
                },
            )
        })
    }

    goTo() {
        this.router.navigate([`admin/thread`])
    }
}