import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { confirmCart, removeItem } from "../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { CartItem } from "../../components/index";
import React from "react";
import { styles } from "./styles";

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    
    const onHandlerDeleteItem = (id) => {
        dispatch(removeItem(id));
    }

    const onHandlerConfirmCart = () => {
        dispatch(confirmCart(cart, total))
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