import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import TeamCityBuildWindow from "./TeamCityBuildWindow";

export default class BuildWindows extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <TeamCityBuildWindow buildId={`DCEMAIN`} />
            <TeamCityBuildWindow buildId={`DCEUNITTESTS`} />
            <TeamCityBuildWindow buildId={`DCEPOSTMAN`} />
            <TeamCityBuildWindow buildId={`ADVANCEDMAIN`} />
        </div>;
    }
}
