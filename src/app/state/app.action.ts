import { createAction, props } from "@ngrx/store";
import { AccountInfo } from "../model/register/account-info";
import { PersonalInfo } from "../model/register/personal-info";
import { Verification } from "../model/register/verification";

enum Action {
    ADD_PERSONAL_ACTION = '[ADD Personal Info]',
    ADD_ACCOUNT_ACTION = '[ADD Account Info]',
    ADD_VERIFICATION_ACTION = '[SEND Verification Code]',
    ADD_CODE_ACTION = '[ADD Code]'
}

const addPersonal = createAction(
    Action.ADD_PERSONAL_ACTION,
    props<{ payload: PersonalInfo }>()
)

const addAccount = createAction(
    Action.ADD_ACCOUNT_ACTION,
    props<{ payload: AccountInfo }>()
)

const addVerification = createAction(
    Action.ADD_VERIFICATION_ACTION,
    props<{ payload: Verification }>()
)

const addCode = createAction(
    Action.ADD_CODE_ACTION,
    props<{ payload: string }>()
)

export { addPersonal, addAccount, addVerification, addCode }