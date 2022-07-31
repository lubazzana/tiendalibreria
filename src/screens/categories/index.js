import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Categories Screen</Text>
            <Button 
                title="Ver productos" 
                onPress={() => {navigation.navigate('Products')}}
            />
        </View>
    )
}

export default CategoriesScreen;