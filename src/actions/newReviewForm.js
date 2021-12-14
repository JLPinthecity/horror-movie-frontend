import { setReview } from "./review";

//synchronous actions
export const updateReviewForm = (name, value) => {
    console.log("value is", value)

    return {
        type: "UPDATE_REVIEW_FORM",
        formData: { name, value }
    }
}

export const showReviewForm = () => {
    return {
        type: "SHOW_REVIEW_FORM"
    }
}

export const addRating = (rating) => {
    return {
        type: "ADD_RATING",
        rating
    }
}


//asynchronous actions 
export const postNewReview = (formData, history, horrorMovie) => {

    let reviews =  horrorMovie.relationships.reviews.data

    console.log("POST NEW REVIEW action fired")

    debugger

    const sendableData = {
        title: formData.title,
        description: formData.description,
        rating: formData.rating,
        horror_movie_id: parseInt(horrorMovie.id)
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
                
                setReview(resp.data)
            }
        })
        .catch(console.log)
    }
}