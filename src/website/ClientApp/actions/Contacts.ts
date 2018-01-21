import * as Model from "../models/Contacts";
import { ApplicationState } from "../reducers";

export const actionCreators = {
    queryContacts: (name: string, value: string) => (dispatch: any, getState: () => ApplicationState) => {
        // console.log(value);

        const queryChangeAction: Model.QueryChangedAction = { type: Model.ActionType.QUERY_CHANGED, name, value };
        dispatch(queryChangeAction);

        const requestContactsAction: Model.RequestContactsAction = { type: Model.ActionType.REQUEST_CONTACT, contactQuery: getState().contacts.query as Model.ContactQuery };
        dispatch(requestContactsAction);
    },
};
