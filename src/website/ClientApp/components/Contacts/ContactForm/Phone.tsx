import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import SearchTextbox from "../../../containers/Contacts/ContactForm/SearchTextbox";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type PhoneProps =
    Model.ContactQuery
    ;

export default class Phone extends React.Component<PhoneProps, {}> {
    public render() {
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.phone);

        return <SearchTextbox
            className="m-form__control m-birthday"
            iconClassName="icon-birthday"
            iconDivClassName="m-form-icon-birthday"
            fieldValue={this.props.phone}
            queryContacts={Actions.actionCreators.queryContacts}
            placeholder="eg: 18012345678"
            fieldName={fieldName}
            label="Phone"
            id="phoneSearch"
        />;
    }
}
