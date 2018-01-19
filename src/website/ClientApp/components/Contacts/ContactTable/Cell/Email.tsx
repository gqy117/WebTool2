import * as React from "react";
import { RowRenderProps } from "react-table";
import { CellProps } from "../../../../models/Cell";
import { Tooltip } from "../../../../utilities";

type EmailProps = CellProps;

export default class Email extends React.Component<EmailProps, {}> {
    public render() {
        const props: RowRenderProps = this.props.rowRenderProps;
        const mailTo: string = `mailto: ${props.value}`;

        return <a className="email" href={mailTo} data-tip={props.value}>{props.value} <Tooltip /></a>;
    }
}
