import { fetch } from "domain-task/index";
import * as queryString from "query-string";
import { delay } from "redux-saga";
import { call, put, race, take, takeEvery } from "redux-saga/effects";
import * as Model from "../models/Builds";

export function* pollingRaceCondition(action: Model.ReceiveBuildsAction) {
    yield race({
        keepPolling: pollData(action),
        stopPolling: take(Model.ActionType.STOP_POLLING),
    });
}

export function* requestBuild(action: Model.RequestBuildsAction) {
    const build: Model.Build = yield call((buildId: string) => fetch(composeUrl(buildId)).then((r) => r.json()), action.buildId);
    build.interval = action.interval;

    const receivedBuildEvent: Model.ReceiveBuildsAction = { type: Model.ActionType.RECEIVE_BUILD, build };
    yield put(receivedBuildEvent);
}

function composeUrl(buildId: string): string {
    const parameter = { buildId };
    const buildQueryString = queryString.stringify(parameter);

    return `api/TeamCity/Build?${buildQueryString}`;
}

function* pollData(action: Model.ReceiveBuildsAction) {
    yield call(delay, action.build.interval);

    const requestBuildEvent: Model.RequestBuildsAction = { type: Model.ActionType.REQUEST_BUILD, buildId: action.build.buildId as string, interval: action.build.interval as number};

    yield put(requestBuildEvent);
}
