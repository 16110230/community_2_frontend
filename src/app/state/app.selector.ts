import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalInfo } from "../model/register/personal-info";

const getPersonal = createSelector(
    createFeatureSelector('app'),
    (state : { personal: PersonalInfo }) => state.personal
)

const getCode = createSelector(
    createFeatureSelector('app'),
    (state: { code: string }) => state.code
)

export { getPersonal, getCode }