import * as Model from "../../ClientApp/models/Builds";
import * as TeamCity from "../../ClientApp/sagas/TeamCity";
import * as Const from "../consts/Builds";

describe("sagas/Teamcity", () => {
    it("requestBuild", () => {
        const gen = TeamCity.requestBuild(Const.RequestBuildsAction);

        expect(gen.next().value).toMatchSnapshot();
        expect(gen.next(Const.DCE_MAIN_SUCCESSFUL).value).toMatchSnapshot();
    });

    it("pollingRaceCondition", () => {
        const gen = TeamCity.pollingRaceCondition(Const.ReceiveBuildsAction);

        expect(gen.next().value).toMatchSnapshot();
    });
});
