import { createReducer, on } from "@ngrx/store";
import { AccountInfo } from "../model/register/account-info";
import { PersonalInfo } from "../model/register/personal-info";
import { Verification } from "../model/register/verification";
import { addAccount, addCode, addPersonal, addVerification } from "./app.action";

const personal : PersonalInfo = new PersonalInfo()
const account : AccountInfo = new AccountInfo()
const verification : Verification = new Verification()
const code : string = ''

const initState = {
    personal,
    account,
    verification,
    code
}

const appReducer = createReducer(
    initState,
    on(addPersonal, (state, { payload }) => {
        return {
            ...state, personal: payload
        }
    }),

    on(addAccount, (state, { payload }) => {
        return {
            ...state, account: payload
        }
    }),

    on(addVerification, (state, { payload }) => {
        return {
            ...state, verification: payload
        }
    }),

    on(addCode, (state, { payload }) => {
        return {
            ...state, code: payload
        }
    })
)

export { appReducer }