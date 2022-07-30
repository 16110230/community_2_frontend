import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountInfo } from "../model/register/account-info";
import { PersonalInfo } from "../model/register/personal-info";

const getPersonal = createSelector(
    createFeatureSelector('app'),
    (state : { personal: PersonalInfo }) => state.personal
)

const getCode = createSelector(
    createFeatureSelector('app'),
    (state: { code: string }) => state.code
)

const getAccount = createSelector(
    createFeatureSelector('app'),
    (state : { account: AccountInfo }) => state.account
)

export { getPersonal, getCode, getAccount }