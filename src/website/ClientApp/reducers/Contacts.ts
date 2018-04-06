import { Action, Reducer } from "redux/index";
import * as Model from "../models/Contacts";

export const initialState: Model.ContactState = {
    contactState: [],
    query: {
        address: "",
        birthdayFrom: "",
        birthdayTo: "",
        gender: Model.GenderKey.All,
        isFetching: false,
        name: "",
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

            state = {
                ...state,
                contactState: receiveAction.contacts,
                query,
            };
            break;
        case Model.ActionType.QUERY_CHANGED:
            const nAction = action as (Model.QueryChangedAction);
            query = { ...state.query };
            query[nAction.name] = nAction.value;
            query.isFetching = true;

            state = {
                ...state,
                query,
            };
            break;
        case Model.ActionType.REQUEST_CONTACT:
        default:
            break;
    }

    return state;
};
