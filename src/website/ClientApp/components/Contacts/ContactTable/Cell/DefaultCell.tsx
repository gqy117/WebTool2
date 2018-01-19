import * as React from "react";
import * as Model from "../../../../models/Cell";
import Cell from "./index";

type DefaultCellProps = Model.CellProps;

export default class DefaultCell extends React.Component<DefaultCellProps, {}> {
    public render() {
        return <Cell className="defaultCell" rowRenderProps={this.props.rowRenderProps} />;
    }
}
