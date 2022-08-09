import { ShowPollingMain } from "../polling/show-polling-main"

export interface ThreadDto {
    id : string
    threadTitle : string
    threadContent : string
    file? : string
    user : string 
    userName : string
    threadCategory : string
    threadCategoryName : string
    isActive : boolean
    version : number
    createdAt : string
    countBookmark? : number
    countLike? : number
    countComment? : number
    isLike? : boolean
    isBookmark? : boolean
    polling? : ShowPollingMain
    userFile? : string
}