import * as queryString from "query-string";
import { push } from "react-router-redux";
import * as Model from "../models/Contacts";
import { ApplicationState } from "../reducers";

export const actionCreators = {
    queryContacts: (name: string, value: string) => (dispatch: any, getState: () => ApplicationState) => {
        const queryChangeAction: Model.QueryChangedAction = { type: Model.ActionType.QUERY_CHANGED, name, value };
        dispatch(queryChangeAction);

        updateUrlAndFetchData(getState, dispatch);
    },
};

export function updateUrlAndFetchData(getState: () => ApplicationState, dispatch: any) {
    const newRoute = queryString.stringify(getState().contacts.query);
    dispatch(push(`/?${newRoute}`));

    const requestContactsAction: Model.RequestContactsAction = {type: Model.ActionType.REQUEST_CONTACT, contactQuery: getState().contacts.query as Model.ContactQuery};
    dispatch(requestContactsAction);
}
