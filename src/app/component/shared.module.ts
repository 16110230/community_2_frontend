import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";

import { MenuModule } from 'primeng/menu';
import { CommonModule } from "@angular/common";
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        FormsModule,
        SidebarModule
    ],
    declarations: [
        SideBarComponent
    ],
    exports: [
        SideBarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }