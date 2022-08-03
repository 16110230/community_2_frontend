import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ShowCompanies } from "src/app/dto/company/show-companies";
import { ShowIndustries } from "src/app/dto/industry/show-industries";
import { ShowPositions } from "src/app/dto/position/show-positions";
import { InsertRegister } from "src/app/dto/register/insert-register";
import { AccountInfo } from "src/app/model/register/account-info";
import { CompanyService } from "src/app/service/company.service";
import { IndustryService } from "src/app/service/industry.service";
import { PositionService } from "src/app/service/position.service";
import { RegisterService } from "src/app/service/register.service";
import { addAccount, addCode } from "src/app/state/app.action";
import { getPersonal } from "src/app/state/app.selector";

@Component({
    selector: 'app-signup-nd',
    templateUrl: './signup-second-step.component.html'
})
export class SignupSecondStepComponent implements OnInit, OnDestroy {

    @Output() newEvent = new EventEmitter<void>()

    constructor(private companyService: CompanyService, private industryService: IndustryService,
        private positionService: PositionService, private registerService: RegisterService, private store: Store) { }

    registerSubscription?: Subscription
    companies: ShowCompanies = {} as ShowCompanies
    industries: ShowIndustries = {} as ShowIndustries
    positions: ShowPositions = {} as ShowPositions
    sendMail: InsertRegister = new InsertRegister()

    account: AccountInfo = new AccountInfo()
    company = ''
    industry: string = ''
    position = ''

    ngOnInit() {
        this.initData()
        this.store.select(getPersonal).subscribe(res => { this.sendMail.email = res.email })
    }

    initData = (): void => {
        this.companyService.getAll(0, 0)
            .subscribe(res => { this.companies = res })

        this.industryService.getAll(0, 0)
            .subscribe(res => { this.industries = res })

        this.positionService.getAll(0, 0)
            .subscribe(res => { this.positions = res })
    }

    ngOnDestroy(): void {
        this.registerSubscription?.unsubscribe()
    }

    submit = (): void => {
        this.account.company = this.company
        this.account.industry = this.industry
        this.account.position = this.position

        this.registerService.sendVerificationCode(this.sendMail)
            .subscribe(res => {
                this.store.dispatch(addCode({ payload: res.message }))
                this.store.dispatch(addAccount({ payload: this.account }))
            })

        this.newEvent.emit()
    }
}