import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { SignupFirstStepComponent } from "./signup-first-step.component/signup-first-step.component";
import { SignupSecondStepComponent } from "./signup-second-step.component/signup-second-step.component";
import { SignupVerifyComponent } from "./signup-verify.component/signup-verify.component";
import { SignupRouting } from "./signup.routing";





@NgModule({
    imports: [
        SignupRouting,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule

    ],
    declarations: [
        SignupFirstStepComponent,
        SignupSecondStepComponent,
        SignupVerifyComponent
    ],
    exports: [
        SignupFirstStepComponent,
        SignupSecondStepComponent,
        SignupVerifyComponent
    ]
})
export class SignupModule { }