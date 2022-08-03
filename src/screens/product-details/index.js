import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const ProductDetailsScreen = ({ navigation }) => {
    const product = useSelector((state) => state.product.selected);

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text}>{product.title}</Text>
                <Text style={styles.text}>{product.author}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>ARS {product.price}</Text>
                <Button 
                    title="Ir al inicio" 
                    onPress={() => navigation.navigate('Categories')} 
                />
            </View>
        </View>
    )
}

export default ProductDetailsScreen;