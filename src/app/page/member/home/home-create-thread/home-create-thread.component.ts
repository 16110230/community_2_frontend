import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-home-create',
    templateUrl: './home-create-thread.component.html',
    styleUrls: ['../home.component.css']
})
export class HomeCreateComponent implements OnInit, OnDestroy{
    category! : string
    categories = [
        'Regular', 'Premium', 'Polling'
    ]
    articles : ShowThreads = {} as ShowThreads
    articlesData : ThreadDto[] = []
    subs? : Subscription

    constructor(
        private threadService : ThreadService, 
        private router: Router
    ) { }

    initData():void{
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    trimChar(data : string) : string{
        let result : string = data.substr(0, 120)+"...";
        return result;
    }


    ngOnInit(): void {
        this.initData()
    }

    ngOnDestroy(): void {
        
    }

    pollings = new FormArray([new FormControl()])

    addNewPolling = () : void => {
        this.pollings.push(new FormControl)
        console.log(this.pollings)
    }

    change = (event : any) : void => {
        console.log(event)
    }
}