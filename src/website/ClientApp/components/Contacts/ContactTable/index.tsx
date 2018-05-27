/* tslint:disable:object-literal-sort-keys */
import * as React from "react";
import ReactTable from "react-table";
import { Column, ControlledStateOverrideProps, } from "react-table";
import Loading from "../../../containers/Contacts/ContactTable/Loading";
import * as Model from "../../../models/Contacts";
import Columns from "./Columns";

type ContactTableProps =
    Model.ContactQuery
    & Model.ContactState;

export default class ContactTable extends React.Component<ContactTableProps, {}> {
    private columns: Columns;

    constructor() {
        super();
        this.columns = new Columns();
    }

    public render() {
        const query: Model.ContactQuery = this.props.query as Model.ContactQuery;
        const list: Model.Contact[] = this.props.contactState as Model.Contact[];
        const columns: Column[] = this.columns.getColumns();

        return <div className="m-portlet-table">
            <ReactTable
                loading={query.isFetching}
                data={list}
                columns={columns}
                defaultPageSize={10}
                showPageSizeOptions={false}
                LoadingComponent={Loading}
                manual={true}
                onFetchData={(state: ControlledStateOverrideProps, instance) => {
                    console.log(state);
                }}
            />
        </div>;
    }
}
