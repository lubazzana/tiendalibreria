import { ADD_PLACE, LOAD_ADDRESS } from "../actions/places.action"

import Place from "../../models/Place";

const initialState = {
    places: []
}

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.coords
                )
            return {
                ...state,
                places: state.places.concat(newPlace)
            }

        case LOAD_ADDRESS:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id,
                    item.title,
                    item.image,
                    item.address,
                    item.coords
                ))
            }
    
        default:
            return state;
    }
}

export default placesReducer;