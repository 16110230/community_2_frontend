import { NgModule } from "@angular/core";
import { ThreadDetailComponent } from "./thread-detail.component";
import { ThreadDetailRouting } from "./thread-detail.routing";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { HomeModule } from "../home/home.module";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
    imports: [
        ThreadDetailRouting,
        CardModule,
        ButtonModule,
        CommonModule,
        HomeModule,
        InfiniteScrollModule,
        FormsModule
    ],
    declarations: [
        ThreadDetailComponent
    ],
    exports: [
        ThreadDetailComponent
    ]
})
export class ThreadDetailModule {}