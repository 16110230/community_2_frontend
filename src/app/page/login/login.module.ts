import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { LoginRouting } from "./login.routing";
import { LoginComponent } from "./login/login.component";
import { ToastModule } from 'primeng/toast';




@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        LoginRouting,
        ToastModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }