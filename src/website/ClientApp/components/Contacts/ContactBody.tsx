import * as React from "react";
import ContactForm from "../../containers/Contacts/ContactForm";
import ContactTable from "../../containers/Contacts/ContactTable";

export default class ContactBody extends React.Component<{}, {}> {
    public render() {
        return <div className="m-portlet__body">

            <ContactForm />
            <ContactTable />
        </div>;
    }
}
