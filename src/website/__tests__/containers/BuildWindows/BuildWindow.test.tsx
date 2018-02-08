import { BuildWindowConverter } from "../../../ClientApp/containers/BuildWindows/BuildWindow";
import * as Model from "../../../ClientApp/models/Builds";
import * as Builds from "../../consts/Builds";

describe("containers/BuildWindows/BuildWindow.tsx", () => {
    it("convertBuildView", () => {
        const converter: BuildWindowConverter = new BuildWindowConverter();
        converter.Timezone = "Pacific/Auckland";

        const buildView: Model.BuildView = converter.convertBuildView(Builds.DCE_MAIN_FAILED).view as Model.BuildView;

        expect(buildView.buildId).toBe("DCEMAIN");
        expect(buildView.buildName).toBe("DCE MAIN");
        expect(buildView.buildStatus).toBe("Failed");
        expect(buildView.cssStatus).toBe("status-warning");
        expect(buildView.imageSrc).toBe("");
    });
});
