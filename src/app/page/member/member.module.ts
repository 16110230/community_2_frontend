import { NgModule } from "@angular/core";
import { AdminModule } from "../admin/admin.module";
import { MemberRouting } from "./member.routing";

@NgModule({
    imports: [
        MemberRouting,
        AdminModule
    ],
    declarations: [],
    exports: []

})
export class MemberModule {}