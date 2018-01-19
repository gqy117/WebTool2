import * as React from "react";
import { connect } from "react-redux";
import * as Actions from "../../../actions/Contacts";
import * as Model from "../../../models/Contacts";
import { ApplicationState } from "../../../reducers";

export default connect(
    (state: ApplicationState, ownProps: Model.ContactQuery): Model.ContactQuery => state.contacts.query || {} as Model.ContactQuery,
    Actions.actionCreators
);
