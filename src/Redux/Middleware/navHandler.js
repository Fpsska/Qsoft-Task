import { switchHeaderNav } from "../actions"

export const navHandler = () => {
    return dispatch => {
        const defineNavStatus = () => {
            if (window.innerWidth < 520) {
                dispatch(switchHeaderNav(true))
            }
            else if (window.innerWidth > 520) {
                dispatch(switchHeaderNav(false))
            }
        }

        window.addEventListener("resize", () => defineNavStatus())
    }
}

export default navHandler;