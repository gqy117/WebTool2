import * as Model from "../models/Contacts";
import { ApplicationState } from "../reducers";

export const actionCreators = {
    changePage: (page: number) => (dispatch: any, getState: () => ApplicationState) => {
        const pageChangeAction: Model.PageChangedAction = { type: Model.ActionType.PAGE_CHANGED, page };
        dispatch(pageChangeAction);

        const requestContactsAction: Model.RequestContactsAction = { type: Model.ActionType.REQUEST_CONTACT, contactQuery: getState().contacts.query as Model.ContactQuery };
        dispatch(requestContactsAction);
    },
};
