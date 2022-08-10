import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminThreadDetailComponent } from "./admin-thread-detail/admin-thread-detail.component";
import { AdminThreadPollingDetailCOmponent } from "./admin-thread-polling-detail/admin-thread-polling-detail.component";
import { AdminThreadUpdateComponent } from "./admin-thread-update/admin-thread-update.component";
import { AdminThreadComponents } from "./admin-thread/admin-thread.component";


const routes: Routes = [
    {
        path: '',
        component: AdminThreadComponents
    },
    {
        path: 'update/:id',
        component: AdminThreadUpdateComponent
    },
    {
        path: 'polling/:id',
        component: AdminThreadPollingDetailCOmponent
    },
    {
        path: 'detail/:id',
        component: AdminThreadDetailComponent
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
export class AdminThreadRouting { }