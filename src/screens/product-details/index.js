import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Details Screen</Text>
            <Button 
                title="Ir al inicio" 
                onPress={() => navigation.navigate('Categories')} 
            />
        </View>
    )
}

export default ProductDetailsScreen;