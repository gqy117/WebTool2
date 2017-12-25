import { History } from "history";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore, GenericStoreEnhancer, ReducersMapObject, Store, StoreEnhancerStoreCreator } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import * as StoreModule from "./reducers";
import { ApplicationState, reducers } from "./reducers";
import rootSaga from "./sagas";

export default function configureStore(history: History, initialState?: ApplicationState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === "undefined" ? null : window as any;

    const sagaMiddleware = createSagaMiddleware();

    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => GenericStoreEnhancer;
    const createStoreWithMiddleware = compose(
        applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware),
        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const allReducers = buildRootReducer(reducers);
    const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;

    // then run the saga
    sagaMiddleware.run(rootSaga);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require<typeof StoreModule>("./reducers");
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }

    return store;
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<ApplicationState>(Object.assign({}, allReducers, { routing: routerReducer }));
}
