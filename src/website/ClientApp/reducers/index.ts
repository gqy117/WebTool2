import * as BuildModel from "../models/Builds";
import * as ContactModel from "../models/Contacts";
import * as Builds from "./Builds";
import * as Contacts from "./Contacts";
import * as Counter from "./Counter";
import * as WeatherForecasts from "./WeatherForecasts";

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState;
    weatherForecasts: WeatherForecasts.WeatherForecastsState;
    builds: BuildModel.BuildState;
    contacts: ContactModel.ContactState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It"s important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    builds: Builds.reducer,
    contacts: Contacts.reducer,
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
};

// This type can be used as a hint on action creators so that its "dispatch" and "getState" params are
// correctly typed to match your store.
export type AppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => ApplicationState) => void;
