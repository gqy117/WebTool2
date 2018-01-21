import * as React from "react";
import * as DropdownButton from "react-bootstrap/lib/DropdownButton";
import * as MenuItem from "react-bootstrap/lib/MenuItem";
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
        const title: string = Model.GenderSelectorDic[props.fieldValue as string];

        return <DropdownButton
            bsStyle="Default"
            bsSize="small"
            block={true}
            title={title}
            id={`dropdown-basic-Default`}
            value={props.fieldValue}
            onSelect={(key: any) => this.props.queryContacts(props.fieldName, key)}
        >
            <MenuItem width={10} className="dropdown-gender-all" eventKey={Model.GenderKey.All}>
                <i className="icon-venus-mars"></i>{Model.GenderValue.All}
            </MenuItem>

            <MenuItem width={10}  className="dropdown-gender-male" eventKey={Model.GenderKey.Male}>
                <i className="icon-mars"></i>{Model.GenderValue.Male}
            </MenuItem>

            <MenuItem width={10}  className="dropdown-gender-female" eventKey={Model.GenderKey.Female}>
                <i className="icon-venus"></i>{Model.GenderValue.Female}
            </MenuItem>
        </DropdownButton>;
    }
}
