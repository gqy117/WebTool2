import * as Const from "../consts/Builds";
import * as Model from "../../ClientApp/models/Builds";
import rootSaga from "../../ClientApp/sagas";

describe("sagas/index", () => {
    it("rootSaga", () => {
        const gen = rootSaga();

        expect(gen.next().value).toMatchSnapshot();
        expect(gen.next(Const.DCE_MAIN_Successful).value).toMatchSnapshot();
    });

});
