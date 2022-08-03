import { FlatList, View } from "react-native";

import { CategoryItem } from "../../components/index";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
    const categories = useSelector((state) => state.category.categories);
    const categorySelected = useSelector((state) => state.category.selected);
    const categoryProducts = useSelector((state) => state.product.filteredProducts);
    
    const onSelected = (item) => {
        navigation.navigate('Products', { 
            categoryId: item.id,
            title: item.title,
        })
    }
    
    const renderItem = ({ item }) => (
        <CategoryItem item={item} onSelected={onSelected} />
    )
    
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CategoriesScreen;