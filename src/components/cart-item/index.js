import { Text, TouchableOpacity, View } from "react-native";

import IonicIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import {colors} from '../../constants/themes/colors';
import { styles } from "./styles";

const CartItem = ({ item, onDelete }) => {
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.title}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailQty}>x {item.quantity}</Text>
                    <Text style={styles.detailPrice}>ARS {item.price}</Text>
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

export default CartItem;