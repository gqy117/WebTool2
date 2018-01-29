import * as React from "react";
import { StyledLoading } from "../../../css/loading";
import * as Model from "../../../models/Contacts";

export default class Loading extends React.Component<Model.DefaultCellProps, {}> {
    public render() {
        return this.props.isFetching ?
            <StyledLoading>
            </StyledLoading>
            : null;
    }
}
