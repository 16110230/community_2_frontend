import { NgModule } from "@angular/core";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { ActivityRouting } from "./activity.routing";
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        ActivityRouting,
        CardModule,
        RadioButtonModule,
        FormsModule
    ],
    declarations: [
        ActivityListComponent
    ],
    exports: [
        ActivityListComponent
    ]
})
export class ActivityModule { }