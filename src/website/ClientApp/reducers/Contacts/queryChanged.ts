import { Action } from "redux";
import * as Model from "../../models/Contacts";
import { IReduce } from "./IReduce";

export class QueryChanged implements IReduce {
    public reduce(state: Model.ContactState, action: Action): Model.ContactState {
        const nAction = action as (Model.QueryChangedAction);
        const query = { ...state.query };
        (query as any)[nAction.name] = nAction.value;
        query.isFetching = true;

        return {
            ...state,
            query: query as Model.ContactQuery,
        };
    }
}
