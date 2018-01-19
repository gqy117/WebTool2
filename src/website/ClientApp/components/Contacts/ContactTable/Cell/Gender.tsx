import * as React from "react";
import { RowRenderProps } from "react-table";
import { CellProps } from "../../../../models/Cell";
import * as Model from "../../../../models/Contacts";
import { Tooltip } from "../../../../utilities";

type GenderProps = CellProps;

export default class Gender extends React.Component<GenderProps, {}> {
    public render() {
        const props: RowRenderProps = this.props.rowRenderProps;
        const css: string = `gender ${Model.GenderCssDic[props.value]}`;

        return <div className={css} data-tip={props.value}> <Tooltip /></div>;
    }
}
