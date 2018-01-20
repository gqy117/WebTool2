import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import SearchTextbox from "../../../containers/Contacts/ContactForm/SearchTextbox";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type NameProps =
    Model.ContactQuery
    ;

export default class Name extends React.Component<NameProps, {}> {
    public render() {
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.name);

        return <SearchTextbox
            className="m-form__control m-name"
            iconClassName="icon-id-card"
            iconDivClassName="m-form-icon-name"
            fieldValue={this.props.name}
            queryContacts={Actions.actionCreators.queryContacts}
            placeholder="eg: 吴蔚"
            fieldName={fieldName}
            label="Name"
            id="namesearch"
        />;
    }
}
