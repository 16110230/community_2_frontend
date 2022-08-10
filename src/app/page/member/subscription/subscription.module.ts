import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { PipeModule } from "src/app/pipe/pipe.module";
import { SubscriptionDetailComponent } from "./subscription-detail/subscription-detail.component";
import { SubscriptionRouting } from "./subscription.routing";
import { SubscriptionComponent } from "./subscription/subscription.component";

@NgModule({
    imports: [
        PipeModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        SidebarModule,
        MenuModule,
        TableModule,
        FileUploadModule,
        SubscriptionRouting
    ],
    declarations: [
        SubscriptionComponent,
        SubscriptionDetailComponent
    ],
    exports: [
        SubscriptionComponent,
        SubscriptionDetailComponent
    ]
})
export class SubscriptionModule { }