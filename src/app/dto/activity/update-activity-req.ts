export interface UpdateActivityReq{
	id?: string
	activityTitle?: string
	activityContent?: string
	activityCategory?: string
	startedAt?: string
	endedAt?: string
	fee?: number
	quantity?: number
	isLimit?: boolean
	provider?: string
	trainer?: string
	isActive?: boolean
	version?: number
}