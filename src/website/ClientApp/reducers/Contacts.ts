import { Action, Reducer } from "redux/index";
import * as Model from "../models/Contacts";

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
        paging: {
            page: 0
        } as Model.ControlledStateOverrideProps,
        phone: "",
    },
};

export const reducer: Reducer<Model.ContactState> = (state: Model.ContactState = initialState, action: Action) => {
    let query: any;

    switch (action.type) {
        case Model.ActionType.RECEIVE_CONTACT:
            const receiveAction = action as (Model.ReceiveContactsAction);
            query = { ...state.query };
            query.isFetching = false;

            state = { ...state };
            state.contactState = receiveAction.contactResultSet;
            state.query = query as Model.ContactQuery;
            break;

        case Model.ActionType.QUERY_CHANGED:
            const nAction = action as (Model.QueryChangedAction);
            query = { ...state.query };
            query[nAction.name] = nAction.value;
            query.isFetching = true;

            state = { ...state };
            state.query = query as Model.ContactQuery;
            break;

        case Model.ActionType.PAGE_CHANGED:
            const pageChange = action as (Model.PageChangedAction);
            query = { ...state.query };
            query.paging.page = pageChange.page;
            query.isFetching = true;

            state = { ...state };
            state.query = query as Model.ContactQuery;
            break;

        case Model.ActionType.REQUEST_CONTACT:
        default:
            break;
    }

    return state;
};
