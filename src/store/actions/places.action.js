import * as FileSystem from "expo-file-system";

import { fetchAddress, insertAddress } from "../../data/db";

import { URL_GEOCODING } from "../../utils/maps";

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_ADDRESS = 'LOAD_ADDRESS'


export const addPlace = (title, image, coords) => {
    return async dispatch => {
        let result;
        const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));

        if(!response.ok) throw new Error("No se ha podido conectar con el servidor");

        const data = await response.json();

        if(!data.results) throw new Error ("No se ha podido encontrar la dirección");

        const address = data.results[0].formatted_address;
        
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName


        try {
            FileSystem.moveAsync({
                from: image,
                to: Path
            })

            result = await insertAddress(title, Path, address, coords);
        } catch (error) {
            console.log(error)
            throw error
        }

        dispatch({
            id: result.insertId,
            type: ADD_PLACE,
            payload: {
                title,
                image: Path,
                address,
                coords
            }
        })
    }
}

export const loadAddress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress();
            dispatch({
                type: LOAD_ADDRESS,
                places: result.rows._array
            })
        } catch (error) {
            throw error
        }

    }
}