import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateThreadReq } from "src/app/dto/thread/update-thread-req";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: "app-admin-article-update",
    templateUrl: "./admin-article-update.component.html"
})

export class AdminArticleUpdateComponent implements OnInit, OnDestroy {

    updateReq: UpdateThreadReq = {}
    isLoading : boolean = false
    updateSub? : Subscription

    constructor(
        private router: Router,
        private threadService : ThreadService,
        private activatedRoute : ActivatedRoute
    ) { }

    idParam : string = ''

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(res => {
            const resultTemp : any = res
            this.idParam = resultTemp.id
            
            this.threadService.getById(this.idParam).subscribe(response => {
                this.updateReq = response.data
            })
        })
    }

    ngOnDestroy(): void {
        this.updateSub?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/article'])
    }

    submit = () : void => {
        this.isLoading = true
        this.threadService.update(this.updateReq).subscribe(res => {
            this.router.navigateByUrl('/admin/article')
            this.isLoading = false
        })
        
    }
}