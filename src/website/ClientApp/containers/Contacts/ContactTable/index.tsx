import * as React from "react";
import { connect } from "react-redux";
import ContactTable from "../../../components/Contacts/ContactTable";
import * as Model from "../../../models/Contacts";
import { ApplicationState } from "../../../reducers";

export default connect(
    (state: ApplicationState) => {
        const result: Model.ContactState = state.contacts;
        // console.log(result);
        return result;
    },
    {}
)(ContactTable) as typeof ContactTable;
