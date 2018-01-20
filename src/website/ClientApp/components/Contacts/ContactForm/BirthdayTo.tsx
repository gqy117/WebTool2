import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import SearchTextbox from "../../../containers/Contacts/ContactForm/SearchTextbox";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type BirthdayToProps =
    Model.ContactQuery
    ;

export default class BirthdayTo extends React.Component<BirthdayToProps, {}> {
    public render() {
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.birthdayTo);

        return <SearchTextbox
            className="m-form__control m-birthday"
            iconClassName="icon-birthday"
            iconDivClassName="m-form-icon-birthday"
            fieldValue={this.props.birthdayTo}
            queryContacts={Actions.actionCreators.queryContacts}
            placeholder="eg: 1987"
            fieldName={fieldName}
            label="To"
            id="birthdayToSearch"
        />;
    }
}
