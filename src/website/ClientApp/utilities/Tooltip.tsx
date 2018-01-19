import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import * as Model from "../models/Tooltip";

export class Tooltip extends React.Component<Model.TooltipProps, {}> {
    public render() {
        return <ReactTooltip type="info" />;
    }
}
