import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowPositions } from "src/app/dto/position/show-positions";
import { PositionService } from "src/app/service/position.service";

@Component({
    selector: "app-admin-position",
    templateUrl: "./admin-position.component.html",
    providers : [
        ConfirmationService
    ]
})

export class AdminPositionComponent implements OnInit {

    constructor(
        private confirmationService : ConfirmationService,
        private positionService : PositionService,
        private router: Router
    ) { }

    positions : ShowPositions = {} as ShowPositions
    deleteSubs? : Subscription
    isDeleted! : number

    initData() : void {
        this.positionService.getAll().subscribe(result => {
            this.positions = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo() {
        this.router.navigate(['/admin/position/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/position/update/${id}`])
    }

    onDelete(id : number) : void {
        this.isDeleted = id
    }

    deleted() : void {
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
}