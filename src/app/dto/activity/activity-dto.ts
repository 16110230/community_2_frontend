export interface ActivityDto {
    id?: number
    activityTitle?: string
    activityContent?: string
    activityCategory?: string
    activityCategoryName?: string
    activityType : string
    activityTypeName : string
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