import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BuildWindow from './BuildWindow';

export default class BuildWindows extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <BuildWindow />
            <BuildWindow />
        </div>;
    }
}