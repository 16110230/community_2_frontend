import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubscriptionDetailComponent } from "./subscription-detail/subscription-detail.component";
import { SubscriptionComponent } from "./subscription/subscription.component";


const routes: Routes = [
    {
        path: '',
        component: SubscriptionComponent
    },
    {
        path: 'details/:id',
        component: SubscriptionDetailComponent
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
export class SubscriptionRouting { }