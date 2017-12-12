import * as React from "react";
import * as Actions from "../../actions/Builds";
import BuildWindow from "../../containers/BuildWindows/BuildWindow";
import * as Model from "../../models/Builds";

export default class TeamCityBuildWindow extends React.Component<Model.BuildConfigration, {}> {
    public static defaultProps: Partial<Model.BuildConfigration> = {
        refreshInverval: 60 * 1000
    };

    public render() {
        return <BuildWindow
            buildId={this.props.buildId}
            refreshInverval={this.props.refreshInverval}
            requestBuilds={Actions.actionCreators.requestBuilds}
        />;
    }
}
