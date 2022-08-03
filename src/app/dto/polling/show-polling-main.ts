import { PollingDto } from "./polling-dto";
import { PollingDetailDto } from "./polling-detail-dto";

export interface ShowPollingMain{
    header : PollingDto
    details : PollingDetailDto[]
}