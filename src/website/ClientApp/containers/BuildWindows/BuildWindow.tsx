import * as React from "react";
import { connect } from "react-redux";
import * as Actions from "../../actions/Builds";
import BuildWindow from "../../components/BuildWindows/BuildWindow";
import * as Model from "../../models/Builds";
import { ApplicationState } from "../../reducers";

export default connect(
    (state: ApplicationState, ownProps: Model.BuildConfigration) => {
        // console.log(state);
        const build: Model.Build = (state.builds.buildState as Model.Build[]).find((x) => x.buildId === ownProps.buildId) || {};

        const buildView: Model.BuildViewDTO = {
            view: {
                buildId: build.buildId,
                buildName: build.buildName,
                buildStatus: build.buildStatus,
                lastUpdated: build.lastUpdated ? new Date(Date.parse(build.lastUpdated)).toLocaleTimeString() : "",
            }
        };

        return buildView;
    },
    Actions.actionCreators
)(BuildWindow) as typeof BuildWindow;
