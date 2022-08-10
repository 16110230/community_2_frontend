import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";

import { MenuModule } from 'primeng/menu';
import { CommonModule } from "@angular/common";
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./nav-bar/navbar.component";
import { MenubarModule } from 'primeng/menubar';
import { CurrencyPipe } from "../pipe/currency.pipe";

@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        FormsModule,
        SidebarModule,
        MenubarModule
    ],
    declarations: [
        SideBarComponent,
        NavbarComponent,
        CurrencyPipe
    ],
    exports: [
        SideBarComponent,
        NavbarComponent,
        CurrencyPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }