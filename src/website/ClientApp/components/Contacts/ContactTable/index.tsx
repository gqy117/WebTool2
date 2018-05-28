/* tslint:disable:object-literal-sort-keys */
import * as React from "react";
import ReactTable from "react-table";
import { Column, ControlledStateOverrideProps, } from "react-table";
import * as Actions from "../../../actions/ContactsTable";
import Loading from "../../../containers/Contacts/ContactTable/Loading";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";
import Columns from "./Columns";

type ContactTableProps =
    Model.ContactQuery
    & Model.ContactState
    & typeof Actions.actionCreators;

export default class ContactTable extends React.Component<ContactTableProps, {}> {
    private columns: Columns;
    private page: number = 1;
    private pageSize: number = 10;

    constructor() {
        super();
        this.columns = new Columns();
    }

    public render() {
        const query: Model.ContactQuery = this.props.query as Model.ContactQuery;
        const result: Model.ContactResultSet = this.props.contactState as Model.ContactResultSet;
        const columns: Column[] = this.columns.getColumns();

        query.paging.page = this.page;
        query.paging.pageSize = this.pageSize;

        return <div className="m-portlet-table">
            <ReactTable
                loading={query.isFetching}
                data={result.contacts}
                columns={columns}
                pages={result.paging.pages}
                defaultPageSize={query.paging.pageSize}
                showPageSizeOptions={false}
                LoadingComponent={Loading}
                manual={true}
                onFetchData={(state: ControlledStateOverrideProps, instance: any) => this.props.changePage(state.page)}
            />
        </div>;
    }
}
