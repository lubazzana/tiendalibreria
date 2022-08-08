import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.containerTouchable}
            onPress={() => onSelected(item)}
        >
            <Image 
                style={styles.img}
                source={{uri: item.img}}
            />
            <View style={styles.detail}> 
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
            </View>
            <View>
                <Text style={styles.price}>ARS {item.price}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
};

export default ProductItem;