import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberProfileTransactionComponent } from "../member-profile/member-profile-transaction/transaction.component";


const routes: Routes = [
    {
        path: '',
        component: MemberProfileTransactionComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TransactionRouting { }