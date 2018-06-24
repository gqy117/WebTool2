import * as queryString from "query-string";
import { LOCATION_CHANGE, LocationChangeAction} from "react-router-redux";
import { Action, Reducer } from "redux/index";
import * as Model from "../models/Contacts";
import { ContactQuery } from "../models/Contacts";

export const initialState: Model.ContactState = {
    contactState: {
        contacts: [],
        paging: {
            page: 0
        } as Model.ControlledStateOverrideProps,
    },
    query: {
        address: "",
        birthdayFrom: "",
        birthdayTo: "",
        gender: Model.GenderKey.All,
        isFetching: false,
        name: "",
        page: 0,
        pageSize: 10,
        phone: "",
    },
};

export const reducer: Reducer<Model.ContactState> = (state: Model.ContactState = initialState, action: Action) => {
    let query: ContactQuery;

    switch (action.type) {
        case Model.ActionType.RECEIVE_CONTACT:
            const receiveAction = action as (Model.ReceiveContactsAction);
            query = { ...state.query };
            query.isFetching = false;

            state = {
                ...state,
                contactState: receiveAction.contactResultSet,
                query: query as Model.ContactQuery,
            };

            break;

        case Model.ActionType.QUERY_CHANGED:
            const nAction = action as (Model.QueryChangedAction);
            query = { ...state.query };
            (query as any)[nAction.name] = nAction.value;
            query.isFetching = true;

            state = {
                ...state,
                query: query as Model.ContactQuery,
            };

            break;

        case Model.ActionType.PAGE_CHANGED:
            const pageChange = action as (Model.PageChangedAction);
            query = { ...state.query };
            query.page = pageChange.page;
            query.isFetching = true;

            state = {
                ...state,
                query: query as Model.ContactQuery,
            };

            break;

        case LOCATION_CHANGE:
            const locationChange = action as (LocationChangeAction);
            const queryFromUrl: Model.ContactQuery = queryString.parse(locationChange.payload.search);
            query = { ...state.query };
            query.isFetching = true;

            query.page = Number(queryFromUrl.page) || query.page;
            query.pageSize = Number(queryFromUrl.pageSize) || query.pageSize;
            query.name = queryFromUrl.name || query.name;
            query.address = queryFromUrl.address || query.address;
            query.birthdayFrom = queryFromUrl.birthdayFrom || query.birthdayFrom;
            query.birthdayTo = queryFromUrl.birthdayTo || query.birthdayTo;
            query.phone = queryFromUrl.phone || query.phone;
            query.gender = queryFromUrl.gender || query.gender;

            state = {
                ...state,
                query: query as Model.ContactQuery,
            };
            break;

        case Model.ActionType.REQUEST_CONTACT:
        default:
            break;
    }

    return state;
};
