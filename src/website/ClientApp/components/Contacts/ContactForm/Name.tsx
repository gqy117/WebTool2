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
        const tooltip: JSX.Element = <div>Eg: <br />
            刘德华<br />
            刘德hua<br />
            刘dehua<br />
            刘*<br />
            刘德?
        </div>;

        return <SearchTextbox
                    className="m-form__control m-name"
                    iconClassName="icon-id-card"
                    iconDivClassName="m-form-icon-name"
                    fieldValue={this.props.name}
                    queryContacts={Actions.actionCreators.queryContacts}
                    tooltip={tooltip}
                    placeholder="eg: 吴蔚"
                    fieldName={fieldName}
                    label="Name"
                    id="namesearch"
                />;
    }
}
