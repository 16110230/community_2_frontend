import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityCreateComponent } from "./activity-create/activity-create.component";
import { ActivityDetailsComponent } from "./activity-details/activity-details.component";
import { ActivityListComponent } from "./activity-list/activity-list.component";


const routes: Routes = [
    {
        path: '',
        component: ActivityListComponent
    },
    {
        path: 'details/:id',
        component: ActivityDetailsComponent
    },
    {
        path: 'create',
        component: ActivityCreateComponent
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
export class ActivityRouting { }
