import { Dictionary } from "../utilities";

export interface ContactQuery {
    isFetching?: boolean;
    name?: string;
    gender?: string;
    address?: string;
    birthdayFrom?: string;
    birthdayTo?: string;
}

export interface ContactState {
    query?: ContactQuery;
    contactState?: Contact[];
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
    contacts: Contact[];
}

export const enum Gender {
    Default = "",
    M = "M",
    F = "F",
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
