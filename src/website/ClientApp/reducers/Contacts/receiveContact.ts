import { Action } from "redux";
import * as Model from "../../models/Contacts";
import { IReduce } from "./IReduce";

export class ReceiveContact implements IReduce {
    public reduce(state: Model.ContactState, action: Action): Model.ContactState {
        const receiveAction = action as (Model.ReceiveContactsAction);
        const paging = receiveAction.contactResultSet.paging;
        const query: Model.ContactQuery = { ...state.query };
        query.isFetching = false;
        query.page = paging.page;

        return state = {
            ...state,
            contactState: receiveAction.contactResultSet,
            query: query as Model.ContactQuery,
        };
    }
}
