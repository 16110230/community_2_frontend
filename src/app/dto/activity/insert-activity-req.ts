export interface InsertActivityReq{
	activityTitle? : string
	activityContent? : string
	activityCategory? : string
	activityType? : string
	startedAt? : string
	endedAt? : string
	fee? : number 
    quantity? : number
	isLimit? : boolean
	provider? : string
	trainer? : string
}