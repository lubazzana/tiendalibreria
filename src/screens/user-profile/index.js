import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useReducer, useState } from "react";

import ImageSelector from "../../components/image-selector";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const UserProfileScreen = () => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Nombre de usuario</Text>
                <TextInput style={styles.input} placeholder="Ingresa tu nombre"/>
                <ImageSelector onImage={(image) => console.log(image)} />
                <Button 
                    title="Guardar"
                    color={colors.primary}
                />
            </View>
        </ScrollView>
    )
}

export default UserProfileScreen;