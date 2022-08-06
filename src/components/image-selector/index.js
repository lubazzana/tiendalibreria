import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState("");
    
    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if(status !== 'granted') {
            Alert.alert('Permisos insuficientes', 'Necesitas permisos para acceder a la cámara', [{ text: 'Ok' }]);
            return false;
        }
        return true;
    }

    const handleTakeImage = async () => {
        const isCameraPermissionGranted = await verifyPermissions();

        if(!isCameraPermissionGranted) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
        });

        setPickedUrl(image.uri);
        onImage(image.uri);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.text}>No hay una imagen seleccionada</Text>
                ) : (
                    <Image source={{ uri: pickedUrl}} style={styles.image} />
                )}
            </View>
            <Button 
                title="Tomar foto"
                color={colors.tertiary}
                onPress={handleTakeImage}
            />
        </View>
    )
}

export default ImageSelector;