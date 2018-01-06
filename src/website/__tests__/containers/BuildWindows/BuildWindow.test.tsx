import { BuildWindowConverter } from "../../../ClientApp/containers/BuildWindows/BuildWindow";
import * as Model from "../../../ClientApp/models/Builds";
import * as Builds from "../../consts/Builds";

describe("containers/BuildWindows/BuildWindow.tsx", () => {
    it("convertBuildView", () => {
        const converter: BuildWindowConverter = new BuildWindowConverter();
        converter.Timezone = "Pacific/Auckland";

        const buildView: Model.BuildViewDTO = converter.convertBuildView(Builds.DCE_MAIN_FAILED);

        expect(buildView).toMatchSnapshot();
    });
});
