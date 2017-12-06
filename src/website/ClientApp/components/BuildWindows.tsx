import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
const healthImg = require('../images/health-60to79.svg') as string;

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="widget widget-build-window sinatra/sinatra" style={{backgroundColor: "rgb(3, 160, 110)"}}>
            <h1 className="title" data-bind="name">DCE Postman Tests</h1>

            <h3 data-bind="status">Successful</h3>

            <p data-showif="show-health">
                <img data-bind-src="image" src={healthImg}></img>
                <strong data-bind="health">64</strong>% <span className="small">of recent builds passed</span>
            </p>

            <p className="context-info">
                <span data-showif="duration">Ran for <span data-bind="duration | durationFormat">an hour</span>,</span>
                <span data-showif="time" data-bind="time | dateFormat">6 days ago</span>
            </p>
            <p className="more-info"><a data-bind-href="link">View on <span data-bind="server">TeamCity</span></a></p>
            <p className="updated-at" data-bind="updatedAtMessage">Last updated at 19:31</p>
        </div>;
    }
}
