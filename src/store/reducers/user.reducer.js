import { userTypes } from "../types/user.types";

const { USER_IMG } = userTypes;

const initialState = {
    name: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_IMG:
            return {
                ...state,
                name: action.text
            }
    
        default:
            return state;
    }
}

export default userReducer;