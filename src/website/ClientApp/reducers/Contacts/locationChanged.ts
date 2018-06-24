import { LocationChangeAction } from "react-router-redux";
import { Action } from "redux";
import * as Model from "../../models/Contacts";
import { toObject } from "../../utilities";
import { IReduce } from "./IReduce";

export class LocationChanged implements IReduce {
    public reduce(state: Model.ContactState, action: Action): Model.ContactState {
        const locationChange = action as (LocationChangeAction);
        const query = { ...state.query };

        toObject(query, locationChange.payload.search);

        return {
            ...state,
            query: query as Model.ContactQuery,
        };
    }
}
