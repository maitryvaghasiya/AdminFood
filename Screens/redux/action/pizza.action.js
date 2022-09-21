import * as ActionTypes from "../ActionTypes"

export const getPizza = () => (dispatch) => {
    console.log("sdcsdcsdcds");
    try {
        fetch('http://192.168.1.5:8000/pizza')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.GET_PIZZA, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        console.log(e);
    }
}

export const addPizza = (data) = (dispatch) => {
    try {
        fetch("http://192.168.1.5:8000/pizza", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.ADD_PIZZA, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        // console.log(e);
    }
}

export const deletePizza = (id) = (dispatch) => {
    try {
        fetch("http://192.168.1.5:8000/pizza/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionTypes.DELETE_PIZZA, payload: id }))
            .catch((error) => console.log(error))
    } catch (e) {
        // console.log(e);
    }
}

export const updatePizza = (data) = (dispatch) => {
    try {
        fetch("http://192.168.1.5:8000/pizza" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.UPDATE_PIZZA, payload: data }))
            .catch((error) => console.log(error))
    } catch (e) {
        // console.log(e);
    }
}
