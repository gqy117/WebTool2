﻿import { fetch } from "domain-task/index";
import * as queryString from "query-string";
import { call, put, } from "redux-saga/effects";
import * as Model from "../models/Contacts";

export function* requestContacts(action: Model.RequestContactsAction) {
    const contactResultSet: Model.ContactResultSet = yield call((contactQuery: Model.ContactQuery) =>
        fetch(composeUrl(contactQuery)).then((r) => r.json()), action.contactQuery);

    console.log(`saga..`);
    const receivedBuildEvent: Model.ReceiveContactsAction = { type: Model.ActionType.RECEIVE_CONTACT, contactResultSet };
    yield put(receivedBuildEvent);
}

function composeUrl(contactQuery: Model.ContactQuery): string {
    return `api/Contacts/?${queryString.stringify(contactQuery)}`;
}
