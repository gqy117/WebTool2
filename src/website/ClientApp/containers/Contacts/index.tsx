import * as React from "react";
import { connect } from "react-redux";
import * as Actions from "../../actions/Contacts";
import Contacts from "../../components/Contacts";
import * as Model from "../../models/Contacts";
import { ApplicationState } from "../../reducers";

export default connect(
    (state: ApplicationState, ownProps: Model.ContactQuery) => {
        const result: Model.ContactState = state.contacts;

        // console.log(result);
        return result;
    },
    Actions.actionCreators
)(Contacts) as typeof Contacts;
