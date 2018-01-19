import * as React from "react";
import * as Model from "../../../../models/Cell";
import Cell from "./index";

type PhoneProps = Model.CellProps;

export default class Phone extends React.Component<PhoneProps, {}> {
    public render() {
        return <Cell className="phone" rowRenderProps={this.props.rowRenderProps} />;
    }
}
