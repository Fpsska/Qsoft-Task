export const ACTION_SWITCH_HEADER_NAV = "ACTION_SWITCH_HEADER_NAV"

export const switchHeaderNav = (status) => {
    return {
        type: ACTION_SWITCH_HEADER_NAV,
        payload: status
    }
}