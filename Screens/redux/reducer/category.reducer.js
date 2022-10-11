import * as ActionTypes from "../ActionTypes"

let initVal = {
    isLoading: false,
    category: [],
    error: ""
}

export const categoryReducer = (state = initVal, action) => {
    console.log("red", action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ""
            }
        case ActionTypes.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                error: ""
            }
        case ActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((c) => c.id != action.payload),
                error: ""
            }
            case ActionTypes.UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((c) => {
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