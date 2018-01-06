import * as Model from "../../ClientApp/models/Builds";
import rootSaga from "../../ClientApp/sagas";
import * as Const from "../consts/Builds";

describe("sagas/index", () => {
    it("rootSaga", () => {
        const gen = rootSaga();

        expect(gen.next().value).toMatchSnapshot();
        expect(gen.next(Const.DCE_MAIN_SUCCESSFUL).value).toMatchSnapshot();
    });

});
