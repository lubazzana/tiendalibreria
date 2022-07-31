import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Products Screen</Text>
            <Button 
                title="Ver detalle del producto" 
                onPress={() => {navigation.navigate('ProductDetails')}}
            />
        </View>
    )
}

export default ProductsScreen;