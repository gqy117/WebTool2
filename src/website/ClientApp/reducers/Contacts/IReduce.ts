import { Action } from "redux";
import * as Model from "../../models/Contacts";

export interface IReduce {
    reduce(state: Model.ContactState, action: Action): Model.ContactState;
}
