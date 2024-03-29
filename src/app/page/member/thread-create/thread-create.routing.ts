import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThreadCreateComponent } from "./thread-create.component";

const routes : Routes = [
    {
        path: '',
        component: ThreadCreateComponent
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
export class ThreadCreateRouting {}