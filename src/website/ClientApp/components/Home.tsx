import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Contacts from "./Contacts";

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <Contacts />;
    }
}
