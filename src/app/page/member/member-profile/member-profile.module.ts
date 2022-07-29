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
import { SharedModule } from "src/app/component/shared.module";
import { TabViewModule } from 'primeng/tabview';
import { MemberProfileRouting } from "./member-profile.routing";
import { MemberProfileComponent } from "./member-profile/member-profile.component";

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
        MemberProfileRouting
    ],
    declarations: [
        MemberProfileComponent
    ],
    exports: [
        MemberProfileComponent
    ]
})
export class MemberProfileModule { }