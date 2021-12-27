export const teamModelErrorCodes = Object.freeze({
    UNAUTHORIZED: "UNAUTHORIZED",
    INVALID_TEAM_NAME: "INVALID_TEAM_NAME",
    GET_TEAM_FAILED: "GET_TEAM_FAILED",
});

export const teamModelErrorMessage = Object.freeze({
    UNAUTHORIZED: "The token is not authorized, please register and verify",
    INVALID_TEAM_NAME: "The team name is either empty or not exist",
    GET_TEAM_FAILED: "An error occured while get team data",
});