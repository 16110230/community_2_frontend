import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThreadDetailComponent } from "./thread-detail.component";

const routes : Routes = [
    {
        path: ':id',
        component: ThreadDetailComponent
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
export class ThreadDetailRouting {}