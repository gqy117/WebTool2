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
    buildId?: string;
    buildStatus?: string;
    buildName?: string;
    lastUpdated?: string;
}

export const enum ActionType {
    REQUEST_BUILD = "REQUEST_BUILD",
    RECEIVE_BUILD = "RECEIVE_BUILD",
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
}

export interface ReceiveBuildsAction {
    type: ActionType.RECEIVE_BUILD;
    build: Build;
}

export type KnownAction = RequestBuildsAction | ReceiveBuildsAction;
