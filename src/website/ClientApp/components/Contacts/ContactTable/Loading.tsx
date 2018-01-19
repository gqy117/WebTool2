import * as React from "react";
import * as Model from "../../../models/Contacts";

type DefaultCellProps = Model.ContactQuery;

export default class Loading extends React.Component<DefaultCellProps, {}> {
    public render() {
        return this.props.isFetching ?
            <div className="m-loader m-loader--brand m-loader--lg">
            </div>
            : null;
    }
}
