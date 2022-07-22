import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { LoginComponent } from "./login.component/login.component";




@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule

    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }