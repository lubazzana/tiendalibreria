import * as Location from "expo-location";

import { Alert, Button, Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import MapPreview from "../map-preview";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();
    const route = useRoute();

    const mapLocation = route?.params?.mapLocation;

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    })

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if(status !== "granted") {
            Alert.alert("Permisos insuficientes", "Necesitas permisos para usar la localización", [{ text: "Ok" }]);
            return false;
        }
        return true;
    }
    
    const handleGetLocation = async () => {
        const isLocationPermissionGranted = await verifyPermissions();

        if(!isLocationPermissionGranted) return;

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000,
        })

        const { latitude, longitude } = location.coords;

        setPickedLocation({
            lat: latitude,
            lng: longitude
        })
        onLocation({
            lat: latitude,
            lng: longitude
        })
    }

    const handlePickLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if(!isLocationOk) return;

        navigation.navigate('Map')
    }

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Localización en proceso</Text>
            </MapPreview>
            <View style={styles.actions}>
                <Button 
                    title="Obtener ubicación"
                    onPress={handleGetLocation}
                    color={colors.primary}
                />
                <Button 
                    title="Elegir del mapa"
                    onPress={handlePickLocation}
                    color={colors.tertiary}
                />
            </View>
        </View>
    )
}

export default LocationSelector;