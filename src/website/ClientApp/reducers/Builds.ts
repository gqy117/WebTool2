import { Reducer } from "redux/index";
import * as Model from "../models/Builds";

const initialState: Model.BuildState = { buildState: [] };

export const reducer: Reducer<Model.BuildState> = (state: Model.BuildState = initialState, action: Model.KnownAction) => {
    switch (action.type) {
        case Model.ActionType.RECEIVE_BUILD:
            const buildWithoutCurrent = (state.buildState as Model.Build[]).filter((x) => x.buildId !== action.build.buildId);

            state = {
                buildState: [
                    ...buildWithoutCurrent,
                    action.build,
                ]
            };
            break;

        case Model.ActionType.REQUEST_BUILD:
        default:
            break;
    }
    // console.log(state);
    return state;
};
