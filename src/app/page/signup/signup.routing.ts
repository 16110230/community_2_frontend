import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { SignupFirstStepComponent } from "./signup-first-step.component/signup-first-step.component"
import { SignupSecondStepComponent } from "./signup-second-step.component/signup-second-step.component"
import { SignupVerifyComponent } from "./signup-verify.component/signup-verify.component"



const routes: Routes = [
    {
        path: '',
        component: SignupFirstStepComponent
    },
    {
        path: 'next',
        component: SignupSecondStepComponent
    },
    {
        path: 'veryfi',
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