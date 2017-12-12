import * as React from "react";
import * as Actions from "../../actions/Builds";
import { Images } from "../../images";
import * as Model from "../../models/Builds";

type BuildProps =
    Model.BuildConfigration
    & Model.BuildViewDTO
    & Model.BuildState
    & typeof Actions.actionCreators
    ;

export default class BuildWindow extends React.Component<BuildProps, {}> {
    private queryLoop: number;

    public componentWillMount() {
        // console.log(`componentWillMount`);
        this.props.requestBuilds(this.props.buildId);
    }

    public componentWillReceiveProps(nextProps: BuildProps) {
        // console.log(`componentWillReceiveProps`);
        this.startPoll();
    }

    public componentWillUnmount() {
        clearTimeout(this.queryLoop);
    }

    public startPoll() {
        clearTimeout(this.queryLoop);
        this.queryLoop = setTimeout(() => this.props.requestBuilds(this.props.buildId), this.props.refreshInverval);
    }

    public render() {
        const build = this.props.view as Model.BuildView;

        return <div>
            <div className="widget widget-build-window" style={{ backgroundColor: "rgb(3, 160, 110)" }}>
                <h1 className="title" data-bind="name"> {build.buildName} </h1>

                <h3 data-bind="status"> {build.buildStatus} </h3>

                <p data-showif="show-health">
                    <img data-bind-src="image" src={Images.health60to79}></img>
                    <strong data-bind="health">64</strong>% <span className="small">of recent builds passed</span>
                </p>

                <p className="context-info">
                    <span data-showif="duration">Ran for
                        <span data-bind="duration | durationFormat">an hour</span>
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
}
