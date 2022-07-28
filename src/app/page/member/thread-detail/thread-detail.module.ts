import { NgModule } from "@angular/core";
import { ThreadDetailComponent } from "./thread-detail.component";
import { ThreadDetailRouting } from "./thread-detail.routing";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@NgModule({
    imports: [
        ThreadDetailRouting,
        CardModule,
        ButtonModule
    ],
    declarations: [
        ThreadDetailComponent
    ],
    exports: [
        ThreadDetailComponent
    ]
})
export class ThreadDetailModule {}