import { InsertPollingMainReq } from "../polling/insert-polling-main-req"

export interface InsertThreadReq {
    threadTitle?: string
    threadContent?: string
    threadCategory?: string
    polling? : InsertPollingMainReq
    fileName?: string
    fileExt?: string
}