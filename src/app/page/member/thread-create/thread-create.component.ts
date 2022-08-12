import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { POLLING, REGULAR } from "src/app/constant/constant";
import { InsertPollingDtlReq } from "src/app/dto/polling/insert-polling-dtl-req";
import { ShowThreadCategories } from "src/app/dto/thread-category/show-thread-categories";
import { ThreadCategoryDto } from "src/app/dto/thread-category/thread-category-dto";
import { InsertThreadReq } from "src/app/dto/thread/insert-thread-req";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { FileService } from "src/app/service/file.service";
import { ThreadCategoryService } from "src/app/service/thread-category.service";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-thread-create',
    templateUrl: './thread-create.component.html',
    styleUrls: ['../home/home.component.css']
})
export class ThreadCreateComponent implements OnInit, OnDestroy{
    category? : ShowThreadCategories = {} as ShowThreadCategories
    categoriesData : ThreadCategoryDto[] = []
    setCategory? : string = REGULAR
    polling? : string = POLLING
    categories : string[] = [] 
    articles : ShowThreads = {} as ShowThreads
    articlesData : ThreadDto[] = []
    insert : InsertThreadReq = {
        threadTitle: "",
        threadContent: "",
        threadCategory: "",
        polling:{
            header : {
                isActive : true
            },
            details :[] 
        },
        fileName: undefined,
        fileExt: undefined,
    }
    subs? : Subscription

    constructor(
        private threadService : ThreadService, 
        private threadCatService : ThreadCategoryService,
        private fileService : FileService,
        private router: Router
    ) { }

    initData():void{
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
        this.threadCatService.getAllUser().subscribe((result) => {
            this.category = result
            this.categoriesData = result.data
            let len : number = this.categoriesData.length
            for(let i = 0; i < len; i++){
                this.categories.push(this.categoriesData[i].categoryName)
            }
        })
    }

    trimChar(data : string) : string{
        let result : string = data.substr(0, 120)+"...";
        return result;
    }

    onSubmit() : void {
        if(this.setCategory == this.polling){
            for(let i=0; i<this.pollings.value.length; i++) {
                const detail : InsertPollingDtlReq  = {
                    pollingDetailsName: this.pollings.value[i],
                    isActive: true
                }

                this.insert.polling?.details?.push(detail)
            }
        } else {
            this.insert.polling = undefined
        }

        
        this.threadService.insert(
            this.insert
            ).subscribe(result => {
                this.router.navigateByUrl('/')
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    ngOnDestroy(): void {
        this.subs?.unsubscribe()
    }

    pollings = new FormArray([new FormControl()])

    addNewPolling = () : void => {
        this.pollings.push(new FormControl)
    }

    change = (event : any) : void => {
        const file = event.files[0]
        this.fileService.uploadAsBase64(file).then(res => {
            this.insert.fileName = res[0]
            this.insert.fileExt = res[1]
        })
    }

    onChangeCategory = (event : any) : void => {
        this.setCategory = event.originalEvent.target.innerText
    }
}