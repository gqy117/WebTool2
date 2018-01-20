import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import Selector from "../../../containers/Contacts/ContactForm/Selector";
import * as Model from "../../../models/Contacts";
import { Nameof } from "../../../utilities/Nameof";

type GenderProps =
    Model.ContactQuery;

export default class Gender extends React.Component<GenderProps, {}> {
    public render() {
        const props: Model.ContactQuery = this.props || {} as Model.ContactQuery;
        const fieldName: string = Nameof((x: Model.ContactQuery) => x.gender);

        return <div className="m-form-search">
            <div className="m-form__group m-form__group--inline">
                <div className="m-form__label">
                    <label>Gender:</label>
                </div>
                <div className="m-form-icon-gender">
                    <i className="icon-venus-mars"></i>
                </div>
                <div className="m-form__control m-gender">
                    <Selector
                        id="m_form_gender"
                        fieldName={fieldName}
                        fieldValue={props.gender}
                        queryContacts={Actions.actionCreators.queryContacts}
                    />
                </div>
            </div>
            <div className="d-md-none m--margin-bottom-10"></div>
        </div>;
    }
}
