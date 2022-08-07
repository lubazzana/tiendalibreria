import MapView, { Marker } from "react-native-maps";
import React, { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import IonicIcons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const MapScreen = ({ navigation }) => {
    const [selectedLocation, setSelectedLocation] = useState();

    const initialRegion = {
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const handlePickLocation = (e) => {
        setSelectedLocation({
            lat: e.nativeEvent.coordinate.latitude,
            lng: e.nativeEvent.coordinate.longitude
        })
    }

    const handleSaveLocation = () => {
        if(selectedLocation) {
            navigation.navigate('New', { mapLocation: selectedLocation });
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <IonicIcons name="md-save-sharp" size={24} color={colors.white} />
                </TouchableOpacity>
            )
        })
    }, [navigation, handleSaveLocation])
    return(
        <MapView 
            style={styles.container} 
            initialRegion={initialRegion} 
            onPress={handlePickLocation}
        >
            {selectedLocation && (
                <Marker
                title="Ubicación seleccionada" 
                coordinate={{
                    ...selectedLocation,
                    latitude: selectedLocation.lat,
                    longitude: selectedLocation.lng
                }} />
            )}
        </MapView>
    )
}

export default MapScreen; 
