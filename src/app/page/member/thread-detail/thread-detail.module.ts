import { NgModule } from "@angular/core";
import { ThreadDetailComponent } from "./thread-detail.component";
import { ThreadDetailRouting } from "./thread-detail.routing";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
    imports: [
        ThreadDetailRouting,
        CardModule,
        ButtonModule,
        CommonModule,
        PipeModule,
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