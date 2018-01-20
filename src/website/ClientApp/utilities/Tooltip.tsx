import * as React from "react";
import * as OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";
import * as RBTooltip from "react-bootstrap/lib/Tooltip";
import * as Model from "../models/Tooltip";

export class Tooltip extends React.Component<Model.TooltipProps, {}> {
    public render() {
        return <OverlayTrigger placement="top" overlay={<RBTooltip id="tooltip">{this.props.overlay}</RBTooltip>}>
            {this.props.children}
        </OverlayTrigger>;
    }
}
