import { Text, TouchableOpacity, View } from "react-native";

import IonicIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const formatDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onDelete }) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{formatDate(item.date)}</Text>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.detail}>
                    <Text style={styles.detailTotal}>Total: ARS {item.total}</Text>
                </View>
                <TouchableOpacity 
                    onPress={() => onDelete(item.id)}
                >
                    <IonicIcons 
                        name="trash-outline"
                        size={24}
                        color={colors.primary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItem;