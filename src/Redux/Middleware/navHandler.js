import { switchHeaderNav } from "../actions"

export const navHandler = () => {
    return dispatch => {
        const defineNavStatus = () => {
            if (window.innerWidth < 720) {
                dispatch(switchHeaderNav(true))
            }
            else if (window.innerWidth > 720) {
                dispatch(switchHeaderNav(false))
            }
        }

        window.addEventListener("resize", () => defineNavStatus())
        window.onload = () => defineNavStatus()
    }
}

export default navHandler;