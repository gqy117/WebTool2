import { fetch } from "domain-task/index";
import * as queryString from "query-string";
import { delay } from "redux-saga";
import { call, put, race, take, takeEvery } from "redux-saga/effects";
import * as Model from "../models/Contacts";

export function* requestBuild(action: Model.RequestContactsAction) {
    // console.log("Contacts request build.");
    const contacts: Model.Contact[] = yield call((contactQuery: Model.ContactQuery) => fetch(composeUrl(contactQuery)).then((r) => r.json()), action.contactQuery);

    // console.log(contacts);

    const receivedBuildEvent: Model.ReceiveContactsAction = { type: Model.ActionType.RECEIVE_CONTACT, contacts };
    yield put(receivedBuildEvent);
}

function composeUrl(contactQuery: Model.ContactQuery): string {
    return `api/Contacts/Index?${queryString.stringify(contactQuery)}`;
}
