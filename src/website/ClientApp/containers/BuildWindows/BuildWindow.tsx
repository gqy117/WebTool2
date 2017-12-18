import * as React from "react";
import { connect } from "react-redux";
import * as Actions from "../../actions/Builds";
import BuildWindow from "../../components/BuildWindows/BuildWindow";
import { Images } from "../../images";
import * as Model from "../../models/Builds";
import { ApplicationState } from "../../reducers";
import { Dictionary } from "../../utilities";

export default connect(
    (state: ApplicationState, ownProps: Model.BuildConfigration) => {
        // console.log(state);
        const build: Model.Build = (state.builds.buildState as Model.Build[]).find((x) => x.buildId === ownProps.buildId) || {};
        const buildView: Model.BuildViewDTO = new BuildWindowConverter().convertBuildView(build);

        return buildView;
    },
    Actions.actionCreators
)(BuildWindow) as typeof BuildWindow;

export class BuildWindowConverter {
    public CssStatusDic = new Dictionary<Model.CssStatus>([
        { k: Model.BuildStatus.FAILED, v: Model.CssStatus.WARNING },
        { k: Model.BuildStatus.SUCCESSFUL, v: Model.CssStatus.SUCCESSFUL },
    ]);

    public ImageDic = new Dictionary<string>([
        { k: Model.BuildStatus.FAILED, v: Images.health00to19 },
        { k: Model.BuildStatus.SUCCESSFUL, v: Images.health80plus },
    ]);

    public convertBuildView(build: Model.Build): Model.BuildViewDTO {
        return {
            view: {
                buildId: build.buildId,
                buildName: build.buildName,
                buildStatus: build.buildStatus,
                cssStatus: this.convertCssStatus(build.buildStatus),
                imageSrc: this.convertImageSrc(build.buildStatus),
                lastUpdated: this.convertLastUpdated(build.lastUpdated),
            }
        } as Model.BuildViewDTO;
    }

    public convertCssStatus(buildStatus: string = Model.BuildStatus.SUCCESSFUL): string {
        return this.CssStatusDic[buildStatus];
    }

    public convertImageSrc(buildStatus: string = Model.BuildStatus.SUCCESSFUL): string {
        return this.ImageDic[buildStatus];
    }

    public convertLastUpdated(lastUpdated?: string): string {
        return lastUpdated ? new Date(Date.parse(lastUpdated)).toLocaleTimeString() : "";
    }
}
