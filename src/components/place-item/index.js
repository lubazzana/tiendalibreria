import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const PlaceItem = ({ id, title, image, address, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem;