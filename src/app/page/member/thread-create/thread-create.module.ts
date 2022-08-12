import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ThreadCreateComponent } from "./thread-create.component";
import { ThreadCreateRouting } from "./thread-create.routing";

@NgModule({
    imports: [
        ThreadCreateRouting,
        DropdownModule,
        CardModule,
        FormsModule,
        CommonModule,
        FileUploadModule,
        InputTextModule,
        ReactiveFormsModule,
        InputTextareaModule
    ],
    declarations: [
        ThreadCreateComponent
    ],
    exports: [
        ThreadCreateComponent
    ]
})
export class ThreadCreateModule {}