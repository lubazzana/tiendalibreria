import { Button, FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PlaceItem } from "../../components/index";
import { colors } from "../../constants/themes/colors";
import { loadAddress } from "../../store/actions/places.action";
import { styles } from "./styles";

const PlaceListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector((state) => state.places.places);

    useEffect(() => {
        dispatch(loadAddress())
    }, [])

    const onSelectPlace = (id) => {
        navigation.navigate("PlaceDetail", { placeId: id });
    }
    const renderItem = ({ item }) => (
        <PlaceItem {...item} onSelect={onSelectPlace} />
    )

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
        <Text>No hay lugares disponibles</Text>
        </View>
    )
    return (
        <FlatList 
            style={styles.container}
            data={places}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
        />
    )
}

export default PlaceListScreen;