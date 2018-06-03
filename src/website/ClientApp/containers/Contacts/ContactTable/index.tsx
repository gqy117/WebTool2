import * as React from "react";
import { connect } from "react-redux";
import * as Actions from "../../../actions/ContactsTable";
import ContactTable from "../../../components/Contacts/ContactTable";
import * as Model from "../../../models/Contacts";
import { ApplicationState } from "../../../reducers";

export default connect(
    (state: ApplicationState) => {
        const result: Model.ContactState = state.contacts;

        return result;
    },
    Actions.actionCreators
)(ContactTable) as typeof ContactTable;
