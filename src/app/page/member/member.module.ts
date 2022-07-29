import { NgModule } from "@angular/core";
import { AdminModule } from "../admin/admin.module";
import { MemberRouting } from "./member.routing";
import { ThreadDetailModule } from "./thread-detail/thread-detail.module";

@NgModule({
    imports: [
        MemberRouting,
        AdminModule,
        ThreadDetailModule
    ],
})
export class MemberModule {}