import * as React from "react";
import * as Model from "../../../../models/Cell";
import { Tooltip } from "../../../../utilities";

type CellProps =
    Model.CellProps;

export default class Cell extends React.Component<CellProps, {}> {
    public render() {
        const className = this.props.className;
        const value = this.props.rowRenderProps.value;

        return <div className={className} data-tip={value}>{value} <Tooltip /></div>;
    }
}
