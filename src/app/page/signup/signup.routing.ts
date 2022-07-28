import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { SignupFirstStepComponent } from "./signup-first-step/signup-first-step.component"
import { SignupSecondStepComponent } from "./signup-second-step/signup-second-step.component"
import { SignupVerifyComponent } from "./signup-verify/signup-verify.component"




const routes: Routes = [
    {
        path: '',
        component: SignupFirstStepComponent
    },
    {
        path: 'detail',
        component: SignupSecondStepComponent
    },
    {
        path: 'verify',
        component: SignupVerifyComponent
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
export class SignupRouting { }