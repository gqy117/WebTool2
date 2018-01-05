import * as Const from "../consts/Builds";
import * as Model from "../../ClientApp/models/Builds";
import * as TeamCity from "../../ClientApp/sagas/TeamCity";

describe("sagas/Teamcity", () => {
    it("requestBuild", () => {
        const gen = TeamCity.requestBuild(Const.RequestBuildsAction);

        expect(gen.next().value).toMatchSnapshot();
        expect(gen.next(Const.DCE_MAIN_Successful).value).toMatchSnapshot();
    });

    it("pollingRaceCondition", () => {
        const gen = TeamCity.pollingRaceCondition(Const.ReceiveBuildsAction);

        expect(gen.next().value).toMatchSnapshot();
    });
});
