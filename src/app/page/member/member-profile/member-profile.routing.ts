import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberProfileChangePassword } from "./member-profile-change-password/member-profile-change-password.component";
import { MemberProfileEditComponent } from "./member-profile-edit/member-profile-edit.component";
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
export class MemberProfileRouting { }