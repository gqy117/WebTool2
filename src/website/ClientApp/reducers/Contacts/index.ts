import { LOCATION_CHANGE } from "react-router-redux";
import { Action, Reducer } from "redux/index";
import * as Model from "../../models/Contacts";
import { Dictionary, toObject} from "../../utilities/index";
import { IReduce } from "./IReduce";
import { LocationChanged } from "./locationChanged";
import { PageChanged } from "./pageChanged";
import { QueryChanged } from "./queryChanged";
import { ReceiveContact } from "./receiveContact";

const Reducers = new Dictionary<IReduce>([
    { k: Model.ActionType.RECEIVE_CONTACT, v: new ReceiveContact() as IReduce },
    { k: Model.ActionType.QUERY_CHANGED, v: new QueryChanged() as IReduce },
    { k: Model.ActionType.PAGE_CHANGED, v: new PageChanged() as IReduce },
    { k: LOCATION_CHANGE, v: new LocationChanged() as IReduce },
]);

export const initialState: Model.ContactState = {
    contactState: {
        contacts: [],
        paging: {
            page: 0
        } as Model.ControlledStateOverrideProps,
    },
    query: {
        address: "",
        birthdayFrom: "",
        birthdayTo: "",
        gender: Model.GenderKey.All,
        isFetching: false,
        name: "",
        page: 0,
        pageSize: 10,
        phone: "",
    },
};

export const reducer: Reducer<Model.ContactState> = (state: Model.ContactState = initialState, action: Action) => {
    const contactReducer = Reducers[action.type];

    if (contactReducer) {
        state = contactReducer.reduce(state, action);
    }

    return state;
};
