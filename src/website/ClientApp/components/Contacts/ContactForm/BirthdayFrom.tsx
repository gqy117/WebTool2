import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import SearchTextbox from "../../../containers/Contacts/ContactForm/SearchTextbox";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type BirthdayFromProps =
    Model.ContactQuery
    ;

export default class BirthdayFrom extends React.Component<BirthdayFromProps, {}> {
    public render() {
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.birthdayFrom);

        return <SearchTextbox
            className="m-form__control m-birthday"
            iconClassName="icon-birthday"
            iconDivClassName="m-form-icon-birthday"
            fieldValue={this.props.birthdayFrom}
            queryContacts={Actions.actionCreators.queryContacts}
            placeholder="eg: 1985"
            fieldName={fieldName}
            label="Birthday"
            id="birthdayFromSearch"
        />;
    }
}
