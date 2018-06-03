import { fetch } from "domain-task/index";
import * as queryString from "query-string";
import { call, put, } from "redux-saga/effects";
import * as Model from "../models/Contacts";

export function* requestContacts(action: Model.RequestContactsAction) {
    const contactResultSet: Model.ContactResultSet = yield call((contactQuery: Model.ContactQuery) =>
        fetch("api/Contacts/", {
            body: JSON.stringify(contactQuery),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "post",
        }).then((r) => r.json()), action.contactQuery);

    const receivedBuildEvent: Model.ReceiveContactsAction = { type: Model.ActionType.RECEIVE_CONTACT, contactResultSet };
    yield put(receivedBuildEvent);
}
