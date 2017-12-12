import { addTask, fetch } from "domain-task/index";
import * as Model from "../models/Builds";
import { AppThunkAction } from "../reducers";

export const actionCreators = {
    requestBuilds: (buildId?: string): AppThunkAction<Model.KnownAction> => (dispatch) => {
        const fetchTask = fetch(`api/TeamCity/Build?buildId=${buildId}`)
            .then((response) => response.json() as Promise<Model.Build>)
            .then((data) => {
                // console.log(data);
                dispatch({ type: Model.ActionType.RECEIVE_BUILD, build: data });
            });

        addTask(fetchTask);
        dispatch({ type: Model.ActionType.REQUEST_BUILD });
    }
};
