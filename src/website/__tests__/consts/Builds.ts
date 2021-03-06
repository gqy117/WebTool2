import * as Model from "../../ClientApp/models/Builds";

export const DCE_MAIN_SUCCESSFUL: Model.Build = {
    buildId: "DCEMAIN",
    buildName: "DCE MAIN",
    buildStatus: "Successful",
    interval: 60 * 1000,
    lastUpdated: "2017-01-05T18:38:23.2244277+13:00",
};

export const DCE_POSTMAN_SUCCESSFUL: Model.Build = {
    buildId: "DCEPOSTMAN",
    buildName: "DCE POSTMAN",
    buildStatus: "Successful",
    interval: 60 * 1000,
    lastUpdated: "2016-01-05T18:38:23.2244277+13:00",
};

export const DCE_MAIN_FAILED: Model.Build = {
    buildId: "DCEMAIN",
    buildName: "DCE MAIN",
    buildStatus: "Failed",
    interval: 5000,
    lastUpdated: "2018-01-05T18:38:23.2244277+13:00",
};

export const RequestBuildsAction: Model.RequestBuildsAction = {
    buildId: "DCEMAIN",
    interval: 6000,
    type: Model.ActionType.REQUEST_BUILD,
};

export const ReceiveBuildsAction: Model.ReceiveBuildsAction = {
    build: DCE_MAIN_SUCCESSFUL,
    type: Model.ActionType.RECEIVE_BUILD,
};
