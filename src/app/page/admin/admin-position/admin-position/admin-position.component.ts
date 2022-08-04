import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowPositions } from "src/app/dto/position/show-positions";
import { PositionService } from "src/app/service/position.service";

@Component({
    selector: "app-admin-position",
    templateUrl: "./admin-position.component.html",
    providers: [
        ConfirmationService
    ]
})

export class AdminPositionComponent implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private positionService: PositionService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    positions: ShowPositions = {} as ShowPositions
    positionsSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number



    initData(): void {
        this.positionService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.positions = result
        })
    }

    loadData(event: LazyLoadEvent) {
        this.getData(event.first, event.rows, event.globalFilter)
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage, query?: string): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage
        this.query = query

        this.positionsSub = this.positionService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.positions.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    goTo() {
        this.router.navigate(['/admin/position/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/position/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id
    }

    deleted(): void {
        this.deleteSubs = this.positionService
            .delete(this.isDeleted)
            .subscribe((_) => {
                this.initData()
            })
    }

    confirm(id: number) {
        this.isDeleted = id
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleted()
            }
        });
    }

    ngOnDestroy() {
        this.positionsSub?.unsubscribe()
        this.deleteSubs?.unsubscribe()
    }
}