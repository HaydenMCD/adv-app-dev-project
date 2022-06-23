export const routes = {
    HOME: `/home`,
    SIGNUP: `/signup`,
    LOGIN: `/`,
    HOWTOPLAY: `/how`,
    CREATEGAME: '/create-game'
}

export const loggedin_notallowed = [routes.LOGIN, routes.SIGNUP]

export const loggedin_allowed = [routes.HOME, routes.CREATEGAME, routes.HOWTOPLAY]