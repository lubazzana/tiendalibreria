import { FlatList, View } from "react-native";

import { ProductItem } from "../../components/index";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const ProductsScreen = ({ navigation, route }) => {
    const products = useSelector((state) => state.product.products);
    const filteredProducts = useSelector((state) => state.product.filteredProducts);
    const productSelected = useSelector((state) => state.product.selected);
    
    const { categoryId } = route.params;

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