import { FlatList, View } from "react-native";

import { ProductItem } from "../../components/index";
import React from "react";
import { products } from "../../data/products";
import { styles } from "./styles";

const ProductsScreen = ({ navigation, route }) => {
    const { categoryId } = route.params;

    const filteredProducts = products.filter((product) => product.categoryId === categoryId);

    const onSelected = (item) => {
        navigation.navigate("ProductDetails", {productId: item.id, title: item.title})
    }

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected}/>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default ProductsScreen;