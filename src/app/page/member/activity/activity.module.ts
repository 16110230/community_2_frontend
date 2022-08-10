import { NgModule } from "@angular/core";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { ActivityRouting } from "./activity.routing";
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ActivityDetailsComponent } from "./activity-details/activity-details.component";
import { ActivityCreateComponent } from "./activity-create/activity-create.component";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from "@angular/common";
import { ActivityDetailsInfoComponent } from "./activity-details/activity-details-info/activity-details-info.component";
import { ActivityDetailsRegisterComponent } from "./activity-details/activity-details-register/activity-details-register.component";
import { FileUploadModule } from "primeng/fileupload";
import { SharedModule } from "src/app/component/shared.module";
import { TableModule } from "primeng/table";
import { HomeModule } from "../home/home.module";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
    imports: [
        ActivityRouting,
        CardModule,
        RadioButtonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        CheckboxModule,
        CommonModule,
        FileUploadModule,
        TableModule,
        PipeModule
    ],
    declarations: [
        ActivityListComponent,
        ActivityDetailsComponent,
        ActivityCreateComponent,
        ActivityDetailsInfoComponent,
        ActivityDetailsRegisterComponent
    ],
    exports: [
        ActivityListComponent,
        ActivityDetailsComponent,
        ActivityCreateComponent,
        ActivityDetailsInfoComponent,
        ActivityDetailsRegisterComponent
    ]
})
export class ActivityModule { }