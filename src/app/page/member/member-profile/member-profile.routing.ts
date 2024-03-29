import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthLoginGuard } from "src/app/guard/auth-login.guard";
import { MemberProfileActivityDetailComponent } from "./member-profile-activity-detail/activity-detail.component";
import { MemberProfileActivityComponent } from "./member-profile-activity/activity.component";
import { MemberProfileChangePassword } from "./member-profile-change-password/member-profile-change-password.component";
import { MemberProfileEditComponent } from "./member-profile-edit/member-profile-edit.component";
import { MemberProfileTransactionComponent } from "./member-profile-transaction/transaction.component";
import { MemberProfileComponent } from "./member-profile/member-profile.component";


const routes: Routes = [
    {
        path: '',
        component: MemberProfileComponent
    },
    {
        path: 'edit',
        component: MemberProfileEditComponent
    },
    {
        path: 'change-password',
        component: MemberProfileChangePassword
    },
    {
        path: 'activity',
        component: MemberProfileActivityComponent
    },
    {
        path: 'activity/detail/:id',
        component: MemberProfileActivityDetailComponent
    },
    {
        path: 'transaction',
        component: MemberProfileTransactionComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MemberProfileRouting { }