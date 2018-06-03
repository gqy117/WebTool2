import * as React from "react";
import Address from "../../../containers/Contacts/ContactForm/Address";
import BirthdayFrom from "../../../containers/Contacts/ContactForm/BirthdayFrom";
import BirthdayTo from "../../../containers/Contacts/ContactForm/BirthdayTo";
import Gender from "../../../containers/Contacts/ContactForm/Gender";
import Name from "../../../containers/Contacts/ContactForm/Name";
import Phone from "../../../containers/Contacts/ContactForm/Phone";
import * as Model from "../../../models/Contacts";

type ContactFormProps =
    Model.ContactQuery
    ;

export default class ContactForm extends React.Component<ContactFormProps, {}> {
    public render() {
        return <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
            <div className="align-items-center">
                <div className="col-xl-8 order-2 order-xl-1">
                    <div className="form-group m-form__group align-items-center">

                        <Name />
                        <Gender />
                        <Address />
                        <BirthdayFrom />
                        <BirthdayTo />
                        <Phone />

                    </div>
                </div>
            </div>
        </div>;
    }
}
