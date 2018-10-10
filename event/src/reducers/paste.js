const initialState = 0

export default (state = initialState, action) => {
    switch(action.type) {
        case 'PASTE_ITEM':
            return action.payload
        default:
            return state
    }
}