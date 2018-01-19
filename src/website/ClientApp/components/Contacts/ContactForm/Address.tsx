import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import SearchTextbox from "../../../containers/Contacts/ContactForm/SearchTextbox";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type AddressProps =
    Model.ContactQuery
    ;

export default class Address extends React.Component<AddressProps, {}> {
    public render() {
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.address);

        return <SearchTextbox
            className="m-form__control m-address"
            fieldValue={this.props.address}
            queryContacts={Actions.actionCreators.queryContacts}
            placeholder="eg: 上海"
            fieldName={fieldName}
            label="Address"
            id="addresssearch"
        />;
    }
}
