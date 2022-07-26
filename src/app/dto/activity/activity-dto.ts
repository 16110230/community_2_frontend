export interface ActivityDto {
    id?: number
    activityTitle?: string
    activityContent?: string
    activityCategory?: number
    activityCategoryName?: string
    startedAt? : string
    endedAt?: string
    fee?: number
    quantity?: number
    isLimit?: boolean
    provider?: string
    trainer?: string
    isActive?: boolean
    version?: number
}