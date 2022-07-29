import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from 'primeng/dropdown';

import { SignupRouting } from "./signup.routing";
import { SignupFirstStepComponent } from "./signup-first-step/signup-first-step.component";
import { SignupSecondStepComponent } from "./signup-second-step/signup-second-step.component";
import { SignupVerifyComponent } from "./signup-verify/signup-verify.component";
import { SignupMainComponent } from "./signup-main/signup-main.component";





@NgModule({
    imports: [
        SignupRouting,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule

    ],
    declarations: [
        SignupFirstStepComponent,
        SignupSecondStepComponent,
        SignupVerifyComponent,
        SignupMainComponent
    ],
    exports: [
        SignupFirstStepComponent,
        SignupSecondStepComponent,
        SignupVerifyComponent,
        SignupMainComponent
    ]
})
export class SignupModule { }