//synchronous actions

export const updateReviewForm = (name, value) => {
    console.log("value is", value)

    return {
        type: "UPDATE_REVIEW_FORM",
        formData: { name, value }
    }
}


//asynchronous actions 
export const postNewReview = () => {
    console.log("POST NEW REVIEW action fired")

    const sendableData = {
        
    }

    const configObj = {
        credentials: "include",
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableData)
    }

    return dispatch => {
        return fetch("http://localhost:3001/api/v1/reviews", configObj)
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp)
            }
        })
        .catch(console.log)
    }
}