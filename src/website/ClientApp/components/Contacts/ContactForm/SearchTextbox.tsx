import * as React from "react";
import * as Actions from "../../../actions/Contacts";
import * as Model from "../../../models/Contacts";
import * as SearchTextboxModel from "../../../models/SearchTextbox";
import { Tooltip } from "../../../utilities";

type SearchTextboxProps =
    Model.ContactQuery
    & SearchTextboxModel.SearchText
    & typeof Actions.actionCreators
    ;

export default class SearchTextbox extends React.Component<SearchTextboxProps, {}> {
    public render() {
        const props: SearchTextboxModel.SearchText = this.props || {} as SearchTextboxModel.SearchText;
        const outerCss: string = `m-form-search ${props.isLast ? "m-form-search-last" : ""}`;
        const tooltip = "<div>刘德华<br />刘德hua<br />刘dehua<br />刘*<br />刘德?</div>";

        return <div className={outerCss}>
            <div className="m-form__group m-form__group--inline">
                <div className="m-form__label">
                    <label>{props.label}:</label>
                </div>
                <div className={props.iconDivClassName}>
                    <Tooltip overlay={tooltip}>
                        <i className={props.iconClassName}></i>
                    </Tooltip>
                </div>
                <div className={props.className}>
                    <input type="text" className="form-control m-input m-input--solid"
                        placeholder={props.placeholder}
                        id={props.id}
                        value={props.fieldValue}
                        onChange={(event) => this.props.queryContacts(props.fieldName, event.target.value)}
                    />

                    <span className="m-input-icon__icon m-input-icon__icon--left">
                        <span>
                            <i className="la la-search"></i>
                        </span>
                    </span>
                </div>
            </div>
        </div>;
    }
}
