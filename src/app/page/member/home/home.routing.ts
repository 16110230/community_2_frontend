import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeCreateComponent } from "./home-create-thread/home-create-thread.component";
import { HomeComponent } from "./home-list/home.component";

const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'create',
        component: HomeCreateComponent
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
export class HomeRouting {}