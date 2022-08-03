import { InsertPollingDtlReq } from "./insert-polling-dtl-req";
import { InsertPollingHdrReq } from "./insert-polling-hdr-req";

export interface InsertPollingMainReq{
    header? : InsertPollingHdrReq
	details? : InsertPollingDtlReq[]
}