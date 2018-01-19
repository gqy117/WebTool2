import * as React from "react";

export default class ContactHead extends React.Component<{}, {}> {
    public render() {
        return <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                    <h3 className="m-portlet__head-text">
                        Contacts <small>powered by hackers</small>
                    </h3>
                </div>
            </div>
        </div>;
    }
}
