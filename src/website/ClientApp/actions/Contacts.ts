import * as queryString from "query-string";
import { push } from "react-router-redux";
import * as Model from "../models/Contacts";
import { ApplicationState } from "../reducers";
import { removeEmptyField } from "../utilities";

export const actionCreators = {
    queryContacts: (name: string, value: string) => (dispatch: any, getState: () => ApplicationState) => {
        const queryChangeAction: Model.QueryChangedAction = { type: Model.ActionType.QUERY_CHANGED, name, value };
        dispatch(queryChangeAction);

        updateUrlAndFetchData(getState, dispatch);
    },
};

export function updateUrlAndFetchData(getState: () => ApplicationState, dispatch: any) {
    const refinedQuery: Model.ContactQuery = removeEmptyField({...(getState().contacts.query)});
    removeFields(refinedQuery);

    const newRoute = queryString.stringify(refinedQuery);
    dispatch(push(`/?${newRoute}`));

    const requestContactsAction: Model.RequestContactsAction = {type: Model.ActionType.REQUEST_CONTACT, contactQuery: getState().contacts.query as Model.ContactQuery};
    dispatch(requestContactsAction);
}

function removeFields(refinedQuery: Model.ContactQuery) {
    delete refinedQuery.isFetching;
    delete refinedQuery.pageSize;

    if (refinedQuery.gender === "0") {
        delete refinedQuery.gender;
    }

    if (refinedQuery.page === 0) {
        delete refinedQuery.page;
    }
}
