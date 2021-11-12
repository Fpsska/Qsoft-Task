import { ACTION_SWITCH_HEADER_NAV } from "./actions"

const initialState = {
    profileName: "Константин",
    isNavMobileVisible: false,
    cards: [
        {
            id: 1,
            image: "Henkel.png"
        },
        {
            id: 2,
            image: "John-Deere.png"
        },
        {
            id: 3,
            image: "McDonalds.png"
        },
        {
            id: 4,
            image: "Ikea.png"
        },
        {
            id: 5,
            image: "Reebok.png"
        },
        {
            id: 6,
            image: "Nike.png"
        },
        {
            id: 7,
            image: "CaterPillar.png"
        }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SWITCH_HEADER_NAV:
            return {
                ...state,
                isNavMobileVisible: action.payload
            }
        default:
            return state
    }
}

export default mainReducer;