export interface UpdateThreadActivityReq {
    id : string
    thread : string
    threadActivityCategory : string
    isActive : boolean
    version : number
}