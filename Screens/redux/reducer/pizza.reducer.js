import * as ActionTypes from "../ActionTypes"

let initVal = {
    isLoading: false,
    pizza: [],
    error: ""
}

export const pizzaReducer = (state = initVal, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_PIZZA:
            return {
                ...state,
                isLoading: false,
                pizza: action.payload,
                error: ""
            }
        case ActionTypes.ADD_PIZZA:
            return {
                ...state,
                isLoading: false,
                pizza: state.pizza.concat(action.payload),
                error: ""
            }
        case ActionTypes.DELETE_PIZZA:
            return {
                ...state,
                isLoading: false,
                pizza: state.pizza.filter((c) => c.id != action.payload),
                error: ""
            }
            case ActionTypes.UPDATE_PIZZA:
            return {
                ...state,
                isLoading: false,
                pizza: state.pizza.map((c) => {
                    if(c.id === action.payload.id) {
                        return action.payload
                    }else{
                        return c
                    }
                }),
                error: ""
            }
        default:
            return state
    }
}