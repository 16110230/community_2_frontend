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
        CheckboxModule
    ],
    declarations: [
        ActivityListComponent,
        ActivityDetailsComponent,
        ActivityCreateComponent
    ],
    exports: [
        ActivityListComponent,
        ActivityDetailsComponent,
        ActivityCreateComponent
    ]
})
export class ActivityModule { }