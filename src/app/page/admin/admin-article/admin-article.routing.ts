import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminArticleCreateComponent } from "./admin-article-create/admin-article-create.component";
import { AdminArticleUpdateComponent } from "./admin-article-update/admin-article-update.component";
import { AdminArticleComponent } from "./admin-article/admin-article.component";


const routes: Routes = [
    {
        path: '',
        component: AdminArticleComponent
    },
    {
        path: 'create',
        component: AdminArticleCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminArticleUpdateComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminArticleRouting { }