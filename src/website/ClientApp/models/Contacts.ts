import { ControlledStateOverrideProps, } from "react-table";
import { Dictionary } from "../utilities";
export { ControlledStateOverrideProps, } from "react-table";

export interface ContactQuery {
    isFetching?: boolean;
    name?: string;
    gender?: string;
    address?: string;
    birthdayFrom?: string;
    birthdayTo?: string;
    phone?: string;
    paging?: ControlledStateOverrideProps;
}

export interface ContactState {
    query?: ContactQuery;
    contactState?: ContactResultSet;
}

export interface ContactResultSet {
    contacts?: Contact[];
    paging?: ControlledStateOverrideProps;
}

export interface Contact {
    name: string;
    address: string;
}

export const enum ActionType {
    QUERY_CHANGED = "QUERY_CHANGED",
    REQUEST_CONTACT = "REQUEST_CONTACT",
    RECEIVE_CONTACT = "RECEIVE_CONTACT",
}

export interface QueryChangedAction {
    type: ActionType.QUERY_CHANGED;
    name: string;
    value: string;
}

export interface RequestContactsAction {
    type: ActionType.REQUEST_CONTACT;
    contactQuery: ContactQuery;
}

export interface ReceiveContactsAction {
    type: ActionType.RECEIVE_CONTACT;
    contactResultSet: ContactResultSet;
}

export const enum Gender {
    Default = "",
    M = "M",
    F = "F",
}

export const enum GenderKey {
    All = "0",
    Male = "1",
    Female = "2",
}

export const enum GenderValue {
    All = "All",
    Male = "Male",
    Female = "Female",
}

export const enum GenderCss {
    Default = "",
    M = "male",
    F = "female",
}

export const GenderCssDic = new Dictionary<string>([
    { k: Gender.Default, v: GenderCss.Default },
    { k: Gender.M, v: GenderCss.M },
    { k: Gender.F, v: GenderCss.F },
]);

export const GenderSelectorDic = new Dictionary<string>([
    { k: GenderKey.All, v: GenderValue.All },
    { k: GenderKey.Male, v: GenderValue.Male },
    { k: GenderKey.Female, v: GenderValue.Female },
]);

export type DefaultCellProps = ContactQuery;
