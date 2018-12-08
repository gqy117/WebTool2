export interface BuildConfigration {
    buildId: string;
    refreshInverval?: number ;
}

export interface BuildViewDTO {
    view?: BuildView;
}

export interface BuildView {
    buildId?: string;
    buildStatus?: string;
    buildName?: string;
    lastUpdated?: string;
    cssStatus: string;
    imageSrc: string;
}

export interface BuildState {
    buildState?: Build[];
}

export interface Build {
    interval?: number;
    buildId?: string;
    buildStatus?: string;
    buildName?: string;
    lastUpdated?: string;
}

export const ActionType = {
    RECEIVE_BUILD: "RECEIVE_BUILD",
    REQUEST_BUILD: "REQUEST_BUILD",
    STOP_POLLING: "STOP_POLLING",
};

export const BuildStatus = {
    FAILED: "Failed",
    SUCCESSFUL: "Successful",
};

export const CssStatus = {
    SUCCESSFUL: "status-successful",
    WARNING: "status-warning",
};

export class RequestBuildsAction {
    public type = ActionType.REQUEST_BUILD;
    public buildId: string;
    public interval: number;
}

export class ReceiveBuildsAction {
    public type = ActionType.RECEIVE_BUILD;
    public build: Build;
}

export class StopPollingAction {
    public type = ActionType.STOP_POLLING;
}

export type KnownAction = RequestBuildsAction | ReceiveBuildsAction;
