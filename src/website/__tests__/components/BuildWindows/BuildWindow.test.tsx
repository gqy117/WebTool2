import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ShallowRenderer from "react-test-renderer/shallow";
import { actionCreators } from "../../../ClientApp/actions/Builds";
import BuildWindow from "../../../ClientApp/components/BuildWindows/BuildWindow";
import * as Model from "../../../ClientApp/models/Builds";

describe("Components/BuildWindows/BuildWindow.test", () => {
    it("Test BuildWindow", () => {
        const buildWindow = ShallowRenderer.createRenderer().render(
            <BuildWindow
                buildId={`DCEMAIN`}
                refreshInverval={60 * 1000}
                startPolling={actionCreators.startPolling}
                stopPolling={actionCreators.stopPolling}
                view={{ cssStatus: `successful` } as Model.BuildView}
            />
        );

        expect(buildWindow).toMatchSnapshot();
    });
});
