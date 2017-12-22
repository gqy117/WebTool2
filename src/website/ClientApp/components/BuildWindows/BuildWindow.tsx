import * as React from "react";
import * as Actions from "../../actions/Builds";
import * as Model from "../../models/Builds";
import { Polling } from "../../utilities";

type BuildProps =
    Model.BuildConfigration
    & Model.BuildViewDTO
    & Model.BuildState
    & typeof Actions.actionCreators
    ;

export default class BuildWindow extends React.Component<BuildProps, {}> {
    private polling: Polling;

    public componentWillMount() {
        this.props.requestBuilds(this.props.buildId);

        this.preparePolling();
    }

    public componentWillReceiveProps(nextProps: BuildProps) {
        this.polling.start();
    }

    public componentWillUnmount() {
        this.polling.stop();
    }

    public render() {
        const build = this.props.view as Model.BuildView;

        return <div>
            <div className={`widget widget-build-window ${build.cssStatus}`}>
                <h1 className="title" data-bind="name"> {build.buildName} </h1>

                <h3 data-bind="status"> {build.buildStatus} </h3>

                <p data-showif="show-health">
                    <img data-bind-src="image" src={build.imageSrc}></img>
                </p>

                <p className="context-info">
                    <span data-showif="duration">Ran for
                        <span data-bind="duration | durationFormat"> an hour</span>
                        ,
                    </span>
                    <span data-showif="time" data-bind="time | dateFormat">6 days ago</span>
                </p>
                <p className="more-info">
                    <a data-bind-href="link">View on <span data-bind="server">TeamCity</span></a>
                </p>
                <p className="updated-at" data-bind="updatedAtMessage">Last updated at {build.lastUpdated}</p>
            </div>
        </div>;
    }

    private preparePolling() {
        this.polling = new Polling(() => this.props.requestBuilds(this.props.buildId), this.props.refreshInverval);
    }
}
