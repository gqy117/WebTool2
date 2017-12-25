import * as React from "react";
import { actionCreators } from "../../actions/Builds";
import BuildWindow from "../../containers/BuildWindows/BuildWindow";
import * as Model from "../../models/Builds";

export default class TeamCityBuildWindow extends React.Component<Model.BuildConfigration, {}> {
    public static defaultProps: Partial<Model.BuildConfigration> = {
        refreshInverval: 5 * 1000
    };

    public render() {
        return <BuildWindow
            buildId={this.props.buildId}
            refreshInverval={this.props.refreshInverval}
            startPolling={actionCreators.startPolling}
            stopPolling={actionCreators.stopPolling}
        />;
    }
}
