import * as React from "react";
import ContactBody from "./ContactBody";
import ContactHead from "./ContactHead";

export default class Contacts extends React.Component<{}, {}> {
    public render() {
        return <div className="m-portlet">

            <ContactHead />
            <ContactBody />

        </div>;
    }
}
