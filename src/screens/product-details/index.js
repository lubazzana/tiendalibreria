import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { addItem } from "../../store/actions/cart.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ProductDetailsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selected);
    const onHandlerAddToCart = (item) => {
        dispatch(addItem(product))
    }

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.author}>{product.author}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>ARS {product.price}</Text>
                <View style={styles.button}>
                    <Button 
                        title="Añadir al carrito" 
                        onPress={() => onHandlerAddToCart()}
                        color={colors.primary}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="Ir al inicio" 
                        onPress={() => navigation.navigate('Categories')}
                        color={colors.tertiary} 
                    />
                </View>
            </View>
        </View>
    )
}

export default ProductDetailsScreen;