//synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", 
        payload: user
    }
}
//returns an object

//asynchronous action creators
export const login = credentials => {
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", configObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch({type: "SET_CURRENT_USER", payload: user})
            }
        })

    }
}
//we are returning a function that accepts dispatch as an argument