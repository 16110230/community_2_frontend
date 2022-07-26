import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouting } from "./home.routing";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";

@NgModule({
    imports: [
        HomeRouting,
        InputTextModule,
        CardModule,
        ButtonModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }