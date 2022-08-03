import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { filteredProducts, selectProduct } from "../../store/actions/products.action";
import { useDispatch, useSelector } from "react-redux";

import { ProductItem } from "../../components/index";
import { styles } from "./styles";

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const filterProducts = useSelector((state) => state.product.filteredProducts);
    const category = useSelector((state) => state.category.selected);

    useEffect(() => {
        dispatch(filteredProducts(category.id))
    }, []);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate("ProductDetails", { 
            title: item.title
        })
    }

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected}/>
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default ProductsScreen;