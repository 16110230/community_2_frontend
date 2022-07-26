export interface UpdateThreadReq {
    id : string
    threadTitle : string
    threadContent : string
    fileName : string
    fileExt : string
    isActive : boolean
    version : number
}