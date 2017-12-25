import { call, put, race, take, takeEvery } from "redux-saga/effects";
import * as Model from "../models/Builds";
import * as TeamCity from "./TeamCity";

function* rootSaga() {
    yield takeEvery(Model.ActionType.REQUEST_BUILD, TeamCity.requestBuild);
    yield takeEvery(Model.ActionType.RECEIVE_BUILD, TeamCity.pollingRaceCondition);
}

export default rootSaga;
