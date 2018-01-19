import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import * as Model from "../../../models/Contacts";
import * as SelectorModel from "../../../models/Selector";

type SelectorProps =
    Model.ContactQuery
    & SelectorModel.Selector
    & typeof Actions.actionCreators
    ;

export default class Selector extends React.Component<SelectorProps, {}> {
    public render() {
        const props: SelectorModel.Selector = this.props || {} as SelectorModel.Selector;

        return <select className="form-control m-bootstrap-select m-bootstrap-select--solid"
                        id={props.id}
                        value={props.fieldValue }
                        onChange={(event) => this.props.queryContacts(props.fieldName, event.target.value)}>

            <option value="0">All</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
        </select>;
    }
}
