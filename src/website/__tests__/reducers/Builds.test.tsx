import { ApplicationState, reducers } from "../../ClientApp/reducers";
import { reducer, initialState } from "../../ClientApp/reducers/Builds";
import * as Const from "../consts/Builds";
import * as Model from "../../ClientApp/models/Builds";

describe("reducers/Builds", () => {
    let currentState: Model.BuildState = initialState;

    it("1. Add 'DCE_MAIN_Successful'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_MAIN_Successful });
        expect(currentState).toMatchSnapshot();
    });

    it("2. Add 'DCE_POSTMAN_Successful'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_POSTMAN_Successful });
        expect(currentState).toMatchSnapshot();
    });

    it("3. UPDATE 'DCE_MAIN_Failed'", () => {
        currentState = reducer(currentState, { type: Model.ActionType.RECEIVE_BUILD, build: Const.DCE_MAIN_Failed });
        expect(currentState).toMatchSnapshot();
    });
});
