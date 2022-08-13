import { NgModule } from "@angular/core";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleRouting } from "./article.routing";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { PipeModule } from "src/app/pipe/pipe.module";
import { ButtonModule } from "primeng/button";

@NgModule({
    imports: [
        ArticleRouting,
        CardModule,
        CommonModule,
        PipeModule,
        ButtonModule
    ],
    declarations: [
        ArticleListComponent,
        ArticleDetailComponent
    ],
    exports: [
        ArticleListComponent,
        ArticleDetailComponent
    ]
})
export class ArticleModule { }