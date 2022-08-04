import { NgModule } from "@angular/core";
import { AdminModule } from "../admin/admin.module";
import { ArticleModule } from "./articles/article.module";
import { MemberRouting } from "./member.routing";
import { ThreadDetailModule } from "./thread-detail/thread-detail.module";

@NgModule({
    imports: [
        MemberRouting,
        AdminModule,
        ThreadDetailModule,
        ArticleModule
    ],
})
export class MemberModule {}