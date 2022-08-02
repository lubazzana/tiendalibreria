import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CartItem } from "../../components/index";
import React from "react";
import { cart } from "../../data/cart";
import { styles } from "./styles";

const CartScreen = () => {
    const total = 10000;
    const onHandlerDeleteItem = (id) => {
        console.log(id);
    }

    const onHandlerConfirmCart = () => {
        console.log('Confirmar carrito');
    }
    
    const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandlerDeleteItem}/>;

    return(
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.total}>Total: ARS {total}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm} 
                    onPress={onHandlerConfirmCart}
                >
                    <Text style={styles.buttonText}>CONFIRMAR COMPRA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen;