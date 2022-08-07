import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import {ImageSelector} from "../../components/index";
import {LocationSelector} from "../../components/index";
import { addPlace } from "../../store/actions/places.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState({});

    const handleTitleChange = (text) => setTitle(text);

    const handleSave = () => {
        dispatch(addPlace(title, image, location));
        navigation.navigate('Places');
    }

    const onHandleImageSelect = (imageUrl) => setImage(imageUrl);

    const onHandleLocationSelect = (location) => setLocation(location);
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange} 
                />
                <ImageSelector onImage={onHandleImageSelect} />
                <LocationSelector onLocation={onHandleLocationSelect} />
                <Button 
                    title='Guardar dirección' 
                    color={colors.primary} 
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

export default NewPlaceScreen;