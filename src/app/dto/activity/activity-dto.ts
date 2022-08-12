export interface ActivityDto {
    id: string
    activityTitle?: string
    activityContent?: string
    activityCategory?: string
    activityCategoryName?: string
    activityType : string
    activityTypeName : string
    startedAt? : string
    endedAt?: string
    file? : string
    fee?: number
    quantity?: number
    isLimit?: boolean
    provider?: string
    trainer?: string
    isActive?: boolean
    version?: number
    createdAt : string
    fullName : string,
    userFile : string
}