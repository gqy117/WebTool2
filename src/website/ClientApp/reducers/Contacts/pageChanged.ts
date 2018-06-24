import { Action } from "redux";
import * as Model from "../../models/Contacts";
import { IReduce } from "./IReduce";

export class PageChanged implements IReduce {
    public reduce(state: Model.ContactState, action: Action): Model.ContactState {
        const pageChange = action as (Model.PageChangedAction);
        const query = { ...state.query };
        query.page = pageChange.page;
        query.isFetching = true;

        return {
            ...state,
            query: query as Model.ContactQuery,
        };
    }
}
