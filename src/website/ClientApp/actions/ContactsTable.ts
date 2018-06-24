import * as queryString from "query-string";
import {push} from "react-router-redux";
import * as Model from "../models/Contacts";
import { ApplicationState } from "../reducers";
import { updateUrlAndFetchData } from "./Contacts";

export const actionCreators = {
    changePage: (page: number) => (dispatch: any, getState: () => ApplicationState) => {
        const pageChangeAction: Model.PageChangedAction = { type: Model.ActionType.PAGE_CHANGED, page };
        dispatch(pageChangeAction);

        updateUrlAndFetchData(getState, dispatch);
    },
};
