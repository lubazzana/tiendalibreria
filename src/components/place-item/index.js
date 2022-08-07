import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const PlaceItem = ({ title, image, address}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default PlaceItem;