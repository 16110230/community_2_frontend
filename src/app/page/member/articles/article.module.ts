import { NgModule } from "@angular/core";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleRouting } from "./article.routing";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        ArticleRouting,
        CardModule,
        CommonModule
    ],
    declarations: [
        ArticleListComponent
    ],
    exports: [
        ArticleListComponent
    ]
})
export class ArticleModule {}