import { InsertPollingDtlReq } from "./insert-polling-dtl-req";
import { InsertPollingHdrReq } from "./insert-polling-hdr-req";

export interface InserPollingMainReq{
    header? : InsertPollingHdrReq
	details? : InsertPollingDtlReq[]
}