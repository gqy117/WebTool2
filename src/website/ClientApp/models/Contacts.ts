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
    page?: number;
    pageSize?: number;
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

export const ActionType = {
    PAGE_CHANGED: "PAGE_CHANGED",
    QUERY_CHANGED: "QUERY_CHANGED",
    RECEIVE_CONTACT: "RECEIVE_CONTACT",
    REQUEST_CONTACT: "REQUEST_CONTACT",
};

export class QueryChangedAction {
    public type = ActionType.QUERY_CHANGED;
    public name: string;
    public value: string;
}

export class PageChangedAction {
    public type = ActionType.PAGE_CHANGED;
    public page: number;
}

export class RequestContactsAction {
    public type = ActionType.REQUEST_CONTACT;
    public contactQuery: ContactQuery;
}

export class ReceiveContactsAction {
    public type = ActionType.RECEIVE_CONTACT;
    public contactResultSet: ContactResultSet;
}

export const Gender = {
    Default: "",
    F: "F",
    M: "M",
};

export const GenderKey = {
    All: "0",
    Female: "2",
    Male: "1",
};

export const GenderValue = {
    All: "All",
    Female: "Female",
    Male: "Male",
};

export const GenderCss = {
    Default: "",
    F: "female",
    M: "male",
};

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
