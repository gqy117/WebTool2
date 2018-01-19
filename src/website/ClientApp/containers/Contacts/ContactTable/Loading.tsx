import * as React from "react";
import { connect } from "react-redux";
import Loading from "../../../components/Contacts/ContactTable/Loading";
import * as Model from "../../../models/Contacts";
import { ApplicationState } from "../../../reducers";

export default connect(
    (state: ApplicationState) => {
        const result: Model.ContactQuery = state.contacts.query || {} as Model.ContactQuery;
        // console.log(result);
        return result;
    },
    {}
)(Loading) as typeof Loading;
