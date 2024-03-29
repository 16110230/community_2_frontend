
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { SharedModule } from "src/app/component/shared.module";
import { MemberProfileTransactionComponent } from "../member-profile/member-profile-transaction/transaction.component";
import { TransactionRouting } from "./transaction.routing";

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        SidebarModule,
        MenuModule,
        TableModule,
        TabViewModule,
        TransactionRouting
    ],
    declarations: [
        MemberProfileTransactionComponent
    ],
    exports: [
        MemberProfileTransactionComponent
    ]
})
export class TransactionModule { }