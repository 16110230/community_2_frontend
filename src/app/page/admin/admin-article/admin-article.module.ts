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
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { AdminArticleCreateComponent } from "./admin-article-create/admin-article-create.component";
import { AdminArticleUpdateComponent } from "./admin-article-update/admin-article-update.component";
import { AdminArticleRouting } from "./admin-article.routing";
import { AdminArticleComponent } from "./admin-article/admin-article.component";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";

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
        FileUploadModule,
        HttpClientModule,
        AdminArticleRouting,
        InputTextareaModule,
        ConfirmDialogModule,
        CheckboxModule
    ],
    declarations: [
        AdminArticleComponent,
        AdminArticleCreateComponent,
        AdminArticleUpdateComponent
    ],
    exports: [
        AdminArticleComponent,
        AdminArticleCreateComponent,
        AdminArticleUpdateComponent
    ]
})
export class AdminArticleModule { }