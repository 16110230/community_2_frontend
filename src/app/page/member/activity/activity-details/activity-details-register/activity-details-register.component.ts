import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { InsertActivityInvoiceReq } from "src/app/dto/activity-invoice/insert-activity-invoice-req";
import { ShowActivityById } from "src/app/dto/activity/show-activity-by-id";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";
import { ActivityService } from "src/app/service/activity.service";
import { FileService } from "src/app/service/file.service";

@Component({
    selector: 'app-details-register',
    templateUrl: './activity-details-register.component.html',
    styleUrls: ['../../activity.component.css']
})
export class ActivityDetailsRegisterComponent {

    constructor(private activateRoute : ActivatedRoute, private activityService : ActivityService, 
        private fileService : FileService, private activityInvoiceService : ActivityInvoiceService, 
        private router : Router) {}

    activity : ShowActivityById = {
        data : {
            id: "",
            activityTitle: "",
            activityContent: "",
            activityCategory: "",
            activityCategoryName: "",
            activityType : "",
            activityTypeName : "",
            startedAt : "",
            endedAt: "",
            file : "",
            fee: 0,
            quantity: 0,
            isLimit: false,
            provider: "",
            trainer: "",
            isActive: false,
            version: 0,
            createdAt : "",
            fullName : "",
            userFile : ""
        }
    }

    invoice : InsertActivityInvoiceReq = {
        activity : "",
        file : ""
    }

    idParam! : string


    initData() :void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id
            this.invoice.activity = this.idParam

            this.activityService.getById(this.idParam).subscribe(result => {
                this.activity = result
            })
        })
    }

    submit = (): void => {
        this.activityInvoiceService.insert(this.invoice).subscribe(() => this.router.navigateByUrl('/home/activities'))
    }

    ngOnInit(): void {
        this.initData()
    }

    change(event: any): void {

        const file = event.files[0]
        this.fileService.uploadAsBase64(file).then(res => {
            this.invoice.fileName = res[0]
            this.invoice.fileExt = res[1]
        })
    }

}