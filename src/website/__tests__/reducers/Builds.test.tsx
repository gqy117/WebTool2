import * as Model from "../../ClientApp/models/Builds";
import { ApplicationState, reducers } from "../../ClientApp/reducers";
import { initialState, reducer } from "../../ClientApp/reducers/Builds";
import * as Const from "../consts/Builds";

describe("reducers/Builds", () => {
    let currentState: Model.BuildState = initialState;

    it("1. Add 'DCE_MAIN_Successful'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_MAIN_SUCCESSFUL });
        expect(currentState).toMatchSnapshot();
    });

    it("2. Add 'DCE_POSTMAN_Successful'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_POSTMAN_SUCCESSFUL });
        expect(currentState).toMatchSnapshot();
    });

    it("3. UPDATE 'DCE_MAIN_Failed'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_MAIN_FAILED });
        expect(currentState).toMatchSnapshot();
    });
});
