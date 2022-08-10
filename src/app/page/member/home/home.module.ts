import { NgModule } from "@angular/core";
import { HomeComponent } from "./home-list/home.component";
import { HomeRouting } from "./home.routing";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from 'primeng/card';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { HomeCreateComponent } from "./home-create-thread/home-create-thread.component";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from 'primeng/fileupload';
import { TimeAgoPipe } from "src/app/pipe/time-ago.pipe";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
    imports: [
        HomeRouting,
        InputTextModule,
        CardModule,
        ButtonModule,
        DropdownModule,
        InputTextareaModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        FileUploadModule,
        InfiniteScrollModule,
        PipeModule
    ],
    declarations: [
        HomeComponent,
        HomeCreateComponent
    ],
    exports: [
        HomeComponent,
        HomeCreateComponent
    ]
})
export class HomeModule { }