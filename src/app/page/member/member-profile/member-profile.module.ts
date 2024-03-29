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
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';

import { MemberProfileRouting } from "./member-profile.routing";
import { MemberProfileComponent } from "./member-profile/member-profile.component";
import { MemberProfileEditComponent } from "./member-profile-edit/member-profile-edit.component";
import { MemberProfileChangePassword } from "./member-profile-change-password/member-profile-change-password.component";
import { MemberProfileActivityComponent } from "./member-profile-activity/activity.component";
import { MemberProfileTransactionComponent } from "./member-profile-transaction/transaction.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MemberProfileActivityDetailComponent } from "./member-profile-activity-detail/activity-detail.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from "primeng/calendar";
import { PipeModule } from "src/app/pipe/pipe.module";
import { HomeModule } from "../home/home.module";

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
        TabViewModule,
        CheckboxModule,
        FileUploadModule,
        HttpClientModule,
        MemberProfileRouting,
        HomeModule,
        InfiniteScrollModule,
        CalendarModule,
        ConfirmDialogModule,
        DialogModule,
        TabMenuModule
    ],
    declarations: [
        MemberProfileComponent,
        MemberProfileEditComponent,
        MemberProfileChangePassword,
        MemberProfileActivityComponent,
        MemberProfileTransactionComponent,
        MemberProfileActivityDetailComponent
    ],
    exports: [
        MemberProfileComponent,
        MemberProfileEditComponent,
        MemberProfileChangePassword,
        MemberProfileActivityComponent,
        MemberProfileTransactionComponent,
        MemberProfileActivityDetailComponent
    ]
})
export class MemberProfileModule { }