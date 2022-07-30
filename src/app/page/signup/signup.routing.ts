import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { SignupMainComponent } from "./signup-main/signup-main.component"

const routes: Routes = [
    {
        path: '',
        component: SignupMainComponent
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