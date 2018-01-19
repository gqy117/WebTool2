import { call, put, race, take, takeEvery, takeLatest, } from "redux-saga/effects";
import * as BuildModel from "../models/Builds";
import * as ContactModel from "../models/Contacts";
import * as Contacts from "./Contacts";
import * as TeamCity from "./TeamCity";

function* rootSaga() {
    yield takeEvery(BuildModel.ActionType.REQUEST_BUILD, TeamCity.requestBuild);
    yield takeEvery(BuildModel.ActionType.RECEIVE_BUILD, TeamCity.pollingRaceCondition);
    yield takeLatest(ContactModel.ActionType.REQUEST_CONTACT, Contacts.requestBuild);
}

export default rootSaga;
