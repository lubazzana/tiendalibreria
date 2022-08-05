import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrderItem } from "../../components/index";
import { getOrders } from "../../store/actions/order.action";
import { styles } from "./styles";

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.items);
    
    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const OnDeleteOrder = () => {
        console.log('Eliminar orden');
    }

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={OnDeleteOrder}/>;

    return(
        <View style={styles.container}>
            <View style={styles.orderList}>
                <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}

export default OrdersScreen;