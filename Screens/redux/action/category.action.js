import * as ActionTypes from "../ActionTypes"

export const getCategory = () => (dispatch) => {
    try {
        fetch("http://192.168.137.18:8000/category")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.GET_CATEGORY, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}

export const addCategory = (data) = (dispatch) => {
    console.log(data);
    try {
        fetch("http://192.168.137.18:8000/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_CATEGORY, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }

}

export const deleteCategory = (id) = (dispatch) => {
    try {
        fetch("http://192.168.137.18:8000/category/"+id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: id }))
            .catch((error) => console.log(error))
    } catch (e) {
        // console.log(e);
    }

}

export const updateCategory = (data) = (dispatch) => {
    try {
        fetch("http://192.168.137.18:8000/category/"+data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.UPDATE_CATEGORY, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        // console.log(e);
    }

}



// dispatch({type: ActionTypes.GET_CATEGORY, payload: data})