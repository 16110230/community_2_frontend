import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowCompanies } from "src/app/dto/company/show-companies";
import { ShowIndustries } from "src/app/dto/industry/show-industries";
import { ShowPositions } from "src/app/dto/position/show-positions";
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { CompanyService } from "src/app/service/company.service";
import { FileService } from "src/app/service/file.service";
import { IndustryService } from "src/app/service/industry.service";
import { PositionService } from "src/app/service/position.service";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-profile-edit",
    templateUrl: "./member-profile-edit.component.html"
})
export class MemberProfileEditComponent implements OnInit, OnDestroy {

    constructor(private userService : UsersService, private companyService : CompanyService,
        private industryService : IndustryService, private positionService : PositionService,
        private router : Router, private fileService : FileService) {}

    profileSubs? : Subscription
    profilePic? : string
    companies : ShowCompanies = { data : [] }
    industries : ShowIndustries = { data : [] }
    positions : ShowPositions = { data : [] }
    user : ShowUserById = {
        data : {
            id : '',
            fullName : '',
            username : '',
            email : '',
            balance : 0,
            company : '',
            companyName : '',
            industry : '',
            industryName : '',
            position : '',
            positionName : '',
            file : '',
            isActive : false,
            version : 0,
            fileName : '',
            fileExt : ''
        }
    }

    ngOnInit(): void {
        this.initData()
    }

    initData = () : void => {
        this.companyService.getAll().subscribe(res => {
            this.companies = res
        })

        this.industryService.getAll().subscribe(res => {
            this.industries = res
        })

        this.positionService.getAll().subscribe(res => {
            this.positions = res
        })

        this.userService.getUserProfile().subscribe(res => {
            this.user = res
            if(res.data.file) this.profilePic = `http://localhost:1221/files/${res.data.file}`
        })
    }

    ngOnDestroy(): void {
        this.profileSubs?.unsubscribe()
    }

    blankPhotoProfile = "../../../../../assets/img/blank-profile.jpg"

    goToEditProfile() {
        this.router.navigate(['/member/profile/edit'])
    }

    goToChangePassword() {
        this.router.navigate(['/member/profiles/change-password'])
    }

    change = (event : any) : void => {
        const file = event.files[0]
        this.fileService.uploadAsBase64(file).then(res => {
            this.user.data.fileName = res[0]
            this.user.data.fileExt = res[1]
        })
    }

    submit = () : void => {
        this.userService.update(this.user.data).subscribe(res => { this.router.navigateByUrl('/member/profiles') })
    }
}