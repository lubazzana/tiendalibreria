import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const PlaceItem = ({ title, image, address, onSelect }) => {
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.container}
        >
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem;