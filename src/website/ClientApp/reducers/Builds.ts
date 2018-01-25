import { Action, Reducer } from "redux/index";
import * as Model from "../models/Builds";

export const initialState: Model.BuildState = { buildState: [] };

export const reducer: Reducer<Model.BuildState> = (state: Model.BuildState = initialState, action: Action) => {
    switch (action.type) {
        case Model.ActionType.RECEIVE_BUILD:
        const receiveAction = action as (Model.ReceiveBuildsAction);
        const buildWithoutCurrent = (state.buildState as Model.Build[]).filter((x) => x.buildId !== receiveAction.build.buildId);

        state = {
            buildState: [
                ...buildWithoutCurrent,
                receiveAction.build,
            ]
        };
        break;

    case Model.ActionType.REQUEST_BUILD:
    default:
        break;
    }

    return state;
};
