import * as Model from "../models/Builds";

export const actionCreators = {
    startPolling: (buildId: string, interval: number = 300 * 1000) => (dispatch: any, getState: any) => {
        const action: Model.RequestBuildsAction = { type: Model.ActionType.REQUEST_BUILD, buildId, interval };
        dispatch(action);
    },
    stopPolling: () => (dispatch: any, getState: any) => {
        const action: Model.StopPollingAction = { type: Model.ActionType.STOP_POLLING };
        dispatch(action);
    }
};
