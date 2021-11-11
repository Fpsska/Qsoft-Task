const initialState = {
    profileName: "Константин",
    cards: [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        }
    ]
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default mainReducer;