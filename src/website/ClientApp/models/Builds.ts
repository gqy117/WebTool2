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

export const enum ActionType {
    REQUEST_BUILD = "REQUEST_BUILD",
    RECEIVE_BUILD = "RECEIVE_BUILD",
    STOP_POLLING = "STOP_POLLING",
}

export const enum BuildStatus {
    SUCCESSFUL = "Successful",
    FAILED = "Failed",
}

export const enum CssStatus {
    SUCCESSFUL = "status-successful",
    WARNING = "status-warning",
}

export interface RequestBuildsAction {
    type: ActionType.REQUEST_BUILD;
    buildId: string;
    interval: number;
}

export interface ReceiveBuildsAction {
    type: ActionType.RECEIVE_BUILD;
    build: Build;
}

export interface StopPollingAction {
    type: ActionType.STOP_POLLING;
}

export type KnownAction = RequestBuildsAction | ReceiveBuildsAction;
