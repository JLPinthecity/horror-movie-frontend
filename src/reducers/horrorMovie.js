const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {

        case "SET_MOVIE":
            return action.payload
            
        default: 
        return state
    }
}